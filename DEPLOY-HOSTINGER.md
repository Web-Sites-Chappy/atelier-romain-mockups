# Publicación estática de Atelier Romain

Publicado el 16 de septiembre de 2026:
https://tan-falcon-358163.hostingersite.com/

Tipo: Custom PHP/HTML website, plan Cloud Startup. Se sirve el contenido de
`out/` desde `public_html`, sin ejecutar Next.js ni Node.js en este sitio.
El sitio anterior `salmon-pony-473179.hostingersite.com` se conservó.

## Acceso utilizado

Se publicó desde hPanel con la sesión colaboradora ya abierta en Chrome,
usando Chrome DevTools CLI con conexión al navegador existente. Es el mismo
método utilizado para MediCo (`aliceblue-oyster-216522.hostingersite.com`).
No fue necesaria la autorización OAuth del MCP de Hostinger ni iniciar sesión
como propietario. El fallo OAuth en modo colaborador no implica que el gestor
de archivos de hPanel esté bloqueado.

El CLI instalado en este equipo está en:
`C:/Users/Juan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/bin/chrome-devtools.js`.
Consultar su skill `skills/chrome-devtools-cli/SKILL.md` y usar `list_pages`
para descubrir las pestañas actuales; los identificadores de página y elemento cambian.

## Actualizaciones

1. Ejecutar `npm run package:hostinger`.
2. Acceder al gestor de archivos de **tan-falcon-358163.hostingersite.com**.
3. Respaldar la publicación anterior y subir `artifacts/atelier-romain-hostinger.zip`.
4. Extraer en `public_html` (nombre de carpeta `.`), conservando `.htaccess`.
5. Comprobar la web y retirar el ZIP del directorio público.

El script de empaquetado normaliza las rutas ZIP con `/`. En Windows,
`ZipFile.CreateFromDirectory` generó entradas con `\` que el servidor Linux
interpretó como nombres de archivo. No volver a usar ese método sin normalización.

## Validación de esta publicación

- 18 páginas HTML y 62 rutas/recursos comprobados sin fallos con `check:static`.
- Inicio, Atelier, Proyectos y Contacto coinciden exactamente con los HTML locales.
- `/index.html` y `/atelier/index.html` responden 200 y coinciden con la exportación.
- Los nuevos logos y motivos originales están disponibles por HTTPS.
- Ruta inexistente devuelve 404.

El formulario de contacto sigue pendiente de conectar a un servicio de envío.

## Actualización del 17 de septiembre de 2026

Publicados: eliminación del círculo del hero en Home y Atelier y reducción del
logo del header a 160 px en escritorio y 135 px en móvil.

Se accedió al gestor desde «Access all files» y se seleccionó explícitamente
`domains/tan-falcon-358163.hostingersite.com/`. El acceso directo del sitio había
abierto anteriormente una carpeta distinta: comprobar siempre la ruta completa.

Respaldo: `domains/tan-falcon-358163.hostingersite.com/backup-before-hero-logo-20260917.zip`
(61.69 MiB), fuera de `public_html`.

Se subió `artifacts/atelier-romain-update.zip` (sin assets, que no cambiaron)
y se extrajo en `public_html` con reemplazo de archivos. El ZIP permanece fuera
del directorio público.

Verificación: Home, Atelier, Proyectos y Contacto coinciden con la exportación;
Home y Atelier comprobados a 1440 y 390 px, sin círculos ni desbordamiento horizontal.
