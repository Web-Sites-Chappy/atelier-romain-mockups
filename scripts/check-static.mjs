import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';
const refs = new Set(['/']);
let pages = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) {
      pages++;
      const route = '/' + file.replaceAll('\\', '/').replace(/^out\//, '').replace(/index\.html$/, '');
      refs.add(route);
      for (const match of (await readFile(file, 'utf8')).matchAll(/(?:src|href)="([^"]+)"/g)) {
        if (match[1].startsWith('/') && !match[1].startsWith('//')) refs.add(match[1].replaceAll('&amp;', '&'));
      }
    }
  }
}
await walk('out');
const failures = [];
for (const ref of refs) {
  const response = await fetch(base + ref);
  if (response.status !== 200) failures.push([ref, response.status]);
  await response.arrayBuffer();
}
const missing = await fetch(base + '/nonexistent-static-check/');
if (missing.status !== 404) failures.push(['missing page', missing.status]);
console.log(JSON.stringify({ pages, checked: refs.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
