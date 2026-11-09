// Uso: node scripts/import-photos.mjs <slug> <foto1> <foto2> ...
// Convierte las fotos a JPG optimizado en public/assets/projects/<slug>/01.jpg, 02.jpg...
// El orden de los argumentos es el orden de la galería; la primera foto es la portada.
import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 2400;
const QUALITY = 80;

const [slug, ...files] = process.argv.slice(2);
if (!slug || files.length === 0) {
  console.error('Uso: node scripts/import-photos.mjs <slug> <foto1> <foto2> ...');
  process.exit(1);
}

const target = join('public', 'assets', 'projects', slug);
await mkdir(target, { recursive: true });
for (const old of await readdir(target)) await rm(join(target, old));

for (const [index, file] of files.entries()) {
  const name = `${String(index + 1).padStart(2, '0')}.jpg`;
  const output = join(target, name);
  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(output);
  const kb = Math.round((await stat(output)).size / 1024);
  console.log(`${slug}/${name}  ${kb} KB  <- ${file}`);
}
