# Atelier Romain — sitio estático

> Situación actual del proyecto y qué falta: **[ESTADO.md](./ESTADO.md)**.

El código fuente usa Next.js para generar el sitio durante la compilación.
Hostinger sirve únicamente los archivos de `out/`: HTML, CSS, JavaScript e imágenes.
No requiere una aplicación Node.js, un proceso en ejecución ni una base de datos en el hosting.
Los archivos estáticos sí utilizan almacenamiento del plan.

## Desarrollo y previsualización

```sh
npm ci
npm run dev
```

Para comprobar exactamente la versión estática:

```sh
npm run build
npm run preview
```

Abre http://localhost:4173. `npm start` también sirve esta exportación localmente.
Después de editar el código, vuelve a compilar para actualizar esta previsualización.
Con la previsualización activa, `npm run check:static` verifica las páginas exportadas,
sus enlaces y recursos locales, y la respuesta 404 de una ruta inexistente.

## Contenido

Los proyectos y los textos de cada página no están en el código: viven como JSON
en `content/` y las fotos en `public/assets/`. `lib/content.ts` los lee durante la
compilación. No hay panel de administración: los cambios se hacen editando estos
archivos, se compila y se sube a Hostinger a mano (ver abajo).

Cada proyecto es un archivo `content/projects/<slug>.json`; el nombre del archivo
es la URL. Un dato que no se conoce se omite de `fields` y no se muestra.

Para cargar fotos de un proyecto, en el orden de la galería (la primera es la portada):

```sh
node scripts/import-photos.mjs <slug> foto1.png foto2.png ...
```

Las convierte a JPG optimizado (máx. 2400 px) en `public/assets/projects/<slug>/01.jpg`,
`02.jpg`… y reemplaza las que hubiera. Después hay que actualizar `images` en el JSON.

## Preparar Hostinger (Windows)

```sh
npm run package:hostinger
```

Genera `artifacts/atelier-romain-hostinger.zip`, con el contenido de `out/` en la raíz.
En el administrador de archivos del alojamiento web del dominio, sube y extrae el ZIP
en `public_html`: allí deben quedar `index.html`, `.htaccess`, `_next/`, `assets/`
y las carpetas de páginas. Haz una copia de los archivos anteriores antes de sustituirlos.
Si el dominio está conectado actualmente a una aplicación Node.js, primero hay que
asociarlo al alojamiento web estático correspondiente en hPanel.

No subas el repositorio completo, `node_modules/` ni `.next/`.
Conserva todos los archivos de `out/`, incluidos los `.txt` que usa la navegación.
La configuración `.htaccess` sirve `index.html`, desactiva el listado de archivos y utiliza la página 404 propia.
Las rutas de proyectos se generan durante la compilación mediante `generateStaticParams`.

## Contacto

El enlace de correo funciona mediante `mailto:`. El formulario visual existente aún
no tiene un servicio de envío conectado. Para recibir sus mensajes hará falta conectar
un servicio externo o un endpoint de correo; la exportación estática por sí sola no envía emails.

Los HTML de la raíz y `assets/` son referencias antiguas. El sitio actual se mantiene
en `app/`, `components/`, `lib/`, `content/` y `public/`.
