# Plan de Modificaciones Detallado — Atelier Romain
> **Actualización del 12/10/2026:** contrastado con los cuatro PDFs originales (8 páginas, 35 comentarios y 2 marcas dibujadas). Los números de pin citados abajo proceden del borrador y no deben usarse como identificadores verificados; localizar por archivo, página y elemento señalado.
>
> **Implementación:** textos y contacto actualizados; cinco estadísticas (incluido `4500+ m²`); servicios integrados en `/atelier#prestations`; enlaces antiguos conservados con redirección; logo y tipografía ampliados; indicadores oficiales de carrusel y tramas con puntos completos. El CMS y la integración de envío del formulario quedan pendientes de definir. Los textos de presentación de L’Atelier y del párrafo de “Votre projet” en la Home están aprobados y se conservan.
> **Basado en la revisión completa de Pierre-Hugo Romain (Octubre 2026)**  
> **Archivos fuente analizados:** Capturas de pantalla con anotaciones de Home, Contact, L'Atelier y Projets (`*.pdf`).  
> **Ubicación de activos de marca identificados:** `ATELIER ROMAIN - Identite visuelle/04_SIGNES/web/`

---

## 📑 Índice
1. [Reglas Globales y Componentes Compartidos](#1-reglas-globales-y-componentes-compartidos)
   - [Header (Cabecera)](#header-cabecera)
   - [Footer (Pie de página)](#footer-pie-de-página)
   - [Identidad Visual: Tramas y Puntos (Regla Estricta)](#identidad-visual-tramas-y-puntos-regla-estricta)
   - [Tipografía y Escala de Textos](#tipografía-y-escala-de-textos)
2. [Página de Inicio (Home)](#2-página-de-inicio-home)
3. [Página de Contacto (Contact)](#3-página-de-contacto-contact)
4. [Página de L'Atelier (L'atelier)](#4-página-de-latelier-latelier)
5. [Fusión de la Página Prestations en L'Atelier](#5-fusión-de-la-página-prestations-en-latelier)
6. [Página de Proyectos (Projets) y Solución de Autogestión](#6-página-de-proyectos-projets-y-solución-de-autogestión)
7. [Checklist de Archivos y Tareas a Ejecutar](#7-checklist-de-archivos-y-tareas-a-ejecutar)

---

## 1. Reglas Globales y Componentes Compartidos

### Header (Cabecera)
*Archivos a modificar:* `components/Header.tsx`, `app/globals.css`.

1. **Aumento del tamaño del logotipo:**
   - **Feedback original:** *"Le logo mériterait d'être un peu plus gros"* (Home - Pág. 1, Pin [2]).
   - **Acción:**
     - En `components/Header.tsx` y en el CSS `.brand img`: aumentar el tamaño de renderizado del logo (actualmente limitado visualmente a ~140–160px). Llevarlo a una escala un 20–25% mayor (ej. `height: 38px` o `width: 180px–190px` en desktop), cuidando que en scroll mantenga una reducción armónica.
2. **Aumento de la tipografía del menú:**
   - **Feedback original:** *"La police du header est trop petite selon les supports et les résolutions d'écran"* (Home - Pág. 1, Pin [1]; repetido en Contact, L'Atelier y Projets).
   - **Acción:**
     - En `.site-header nav a` y `.header-cta`: aumentar el tamaño de fuente (pasar de `0.75rem`/`0.8rem` a un mínimo de `0.9rem` / `14px–15px`), con mejor contraste y espaciado entre enlaces (`gap: 28px–32px`).

---

### Footer (Pie de página)
*Archivos a modificar:* `components/Footer.tsx`, `app/globals.css`.

1. **Invertir los colores de la trama de puntos decorativa:**
   - **Feedback original:** *"Pointillés du bas de page : points verts, sur fond blanc. Sera mieux intégré."* (Home - Pág. 2, Pin [7]).
   - **Estado actual:** Fondo verde oliva (`var(--olive)`) con trama arena (`url('/assets/trame/trame-carre_sable.png')`).
   - **Modificación requerida:** Fondo blanco (`#ffffff`) con puntos verdes derivados de `trame-carre_olive.png`, conservando la forma oficial y únicamente puntos completos en los bordes.
2. **Corrección del texto de marca debajo del logo:**
   - **Feedback original:** *"Pied de page : "Architecture juste et vivante". Ne pas écrire "Atelier d'architecture en Provence""* (Home - Pág. 2, Pin [9]).
   - **Estado actual:** `<p>Atelier d’architecture en Provence. Architecture juste et vivante.</p>`
   - **Texto nuevo exacto:** `<p>Architecture juste et vivante.</p>`
3. **Enlaces de navegación secundaria (Columna "À découvrir"):**
   - **Feedback original:** *"Le lien "permis de construire" (et "rénovation") amène sur une page qui ne figure pas sur le header... fusionner la page PRESTATION... et la page ATELIER"* (Home - Pág. 2, Pin [8]).
   - **Modificación:** Actualizar los enlaces `/prestations#permis` y `/prestations#renovation` para que apunten a los anclajes correspondientes integrados en la página L'Atelier (`/atelier#permis` y `/atelier#renovation`).

---

### Identidad Visual: Tramas y Puntos (Regla Estricta)
*Archivos a revisar:* `app/globals.css`, `components/HomeHero.tsx`, divisor de páginas y recuadros decorativos.

1. **Regla de oro de la marca (Puntos completos, sin cortes):**
   - **Feedback original:**
     > *"La trame à point de la charte graphique ne doit pas être coupée. C'est à dire que les points aux extrémités du remplissage doivent être complets, pas coupés en deux. Cf. fichier fournis et charte graphique. ICI : c'est parfait en haut et à gauche, mais coupé à droite et en bas."* (Home Pág. 1 [Pin 4], Home Pág. 2 [Pin 2], Contact [Pin 2]).
   - **Causa técnica:** Cuando se usa `background-repeat: repeat` o un contenedor con dimensiones arbitrarias (ej. `width: 100%`, `height: 70px`), la imagen de trama se corta en el borde derecho e inferior.
   - **Solución técnica recomendada:**
     - Fijar el `background-size` y las dimensiones del contenedor (`width` / `height`) de forma que sean **múltiplos exactos** de la cuadrícula de puntos.
     - Usar la propiedad CSS `background-repeat: round;` o calcular los anchos con `width: calc(N * paso_del_punto)` y centrar con margen auto.
     - En el recuadro `.dot-square` de la sección L'Atelier: ajustar ancho y alto fijos para que coincidan con la cantidad entera de filas y columnas de la trama.
2. **Margen inferior en la banda verde (`brand-divider`):**
   - **Feedback original:** *"on peut étendre un petit peu le fond vert vers le bas afin que les pointillés ne se retrouvent pas en limite ?"* (Home - Pág. 1, Pines [5] y [6]).
   - **Modificación:** Incrementar la altura del divisor o agregar padding inferior (ej. pasar la altura de `70px` a `90px–100px` o ajustar `padding-bottom: 16px`) para que los puntos respiren y no toquen el borde inferior del color de fondo.
3. **Puntos oficiales en los controles de carrusel:**
   - **Feedback original:** *"Ma charte graphique contient des "points" à utiliser pour les différents carrousels. Voir fichiers transmis au départ"* (Home - Pág. 1, Pin [3]).
   - **Activos a utilizar:** Usar los iconos de punto oficiales ubicados en:
     `ATELIER ROMAIN - Identite visuelle/04_SIGNES/web/point_olive.png` y `point_sable.png` (o su equivalente SVG) en lugar de círculos CSS genéricos.

---

### Tipografía y Escala de Textos
*Archivos a modificar:* `app/globals.css`.

- **Feedback original en cuatro comentarios de Home, además del header:** *"Cette typo apparait trop petite suivant les supports et les résolutions d'écran"*.
- **Elementos afectados:**
  - `.eyebrow` (subtítulos en mayúsculas como "NOTRE APPROCHE", "RÉALISATION SÉLECTIONNÉE", "VOTRE PROJET"): actualmente en `0.68rem`–`0.72rem`. Aumentar a `0.8rem`–`0.85rem` con `letter-spacing: 0.12em`.
  - Textos secundarios y metadatos de proyectos (`.featured-copy p`, fichas de proyecto, etc.): aumentar de `0.75rem` a `0.85rem`–`0.9rem`.
  - Párrafos generales: asegurar un tamaño base mínimo de `1rem` (16px) en pantallas medianas y grandes.

---

## 2. Página de Inicio (Home)
*Archivo:* `app/page.tsx`, `components/HomeHero.tsx`, `app/globals.css`.

| Sección / Elemento | Estado Actual | Modificación Requerida | Feedback de Pierre-Hugo |
|---|---|---|---|
| **Carrusel Hero** | Bullets circulares CSS (`border-radius: 50%`) | Implementar los puntos de la marca (`point_olive` / `point_sable`) | *"Ma charte graphique contient des "points" à utiliser pour les différents carrousels"* |
| **Banda Divisoria** | Altura 70px, puntos al límite inferior | Aumentar altura a ~90px, puntos íntegros sin cortar | *"on peut étendre un petit peu le fond vert vers le bas..."* |
| **Manifiesto (Subtítulo)** | Eyebrow pequeño | Aumentar escala tipográfica | *"Cette typo apparait trop petite"* |
| **Manifiesto (Titular `<h2>`)** | *Une architecture ancrée dans son territoire, attentive à la lumière, aux matières et aux usages — conçue sur mesure, pour durer.* | **"Une architecture ancrée dans son territoire, attentive aux matières, à la lumière et aux usages, conçue sur mesure et pour durer"** *(Nota el orden: "aux matières, à la lumière")* | Texto exacto dictado en Pin [8] |
| **Proyecto Destacado** | Textos secundarios y categoría pequeños | Aumentar escala de `.eyebrow` y metadatos | *"Cette typo apparait trop petite"* |
| **Bloque L'Atelier (`.dot-square`)** | Puntos cortados a la derecha y abajo | Dimensionar recuadro para encajar la cuadrícula exacta de puntos | *"ICI : c'est parfait en haut et à gauche, mais coupé à droite et en bas"* |
| **Sección "Votre projet" (Titular)** | `<h2>Rénover, agrandir,<br />transformer.</h2>` | `<h2>Construire, rénover,<br />transformer.</h2>` | *""Construire, rénover, transformer" plutôt"* |
| **Sección "Votre projet" (Botón CTA)** | Enlace a `/prestations` externa | Enlazar a la sección integrada dentro de `/atelier#prestations` | *"Ce lien mène sur une page qui n'apparait pas dans le header... fusionner..."* |

---

## 3. Página de Contacto (Contact)
*Archivo:* `app/contact/page.tsx`, `app/globals.css`.

| Elemento | Estado Actual | Modificación Requerida |
|---|---|---|
| **Frase de introducción** (`.page-intro`) | *Racontez-nous votre lieu, vos besoins et vos envies. Nous vous répondrons pour organiser un premier échange.* | **"Parlez-nous de votre projet, vos besoins et vos envies. Nous vous proposerons un premier échange"** |
| **Formulario: Campo Teléfono** | No existe (solo Nom, Email, Projet, Message) | **Agregar nuevo campo:** `<label>Téléphone<input type="tel" name="phone" autoComplete="tel" /></label>` |
| **Formulario: Etiqueta Mensaje** | `<label>Quelques mots<textarea .../></label>` | Cambiar etiqueta a: `<label>Quelques mots sur votre projet<textarea .../></label>` |
| **Bloque de Coordenadas / Datos** | Texto anterior con "Provence-Alpes-Côte d'Azur / Sur rendez-vous" | **Reemplazar por el formato exacto:**<br>`Atelier Romain`<br>`471, chemin du Riotord`<br>`84800 Lagnes`<br>`06.81.54.12.78` *(con enlace `tel:0681541278`)* |
| **Trama de puntos de la página** | Posible corte en bordes | Ajustar dimensiones para evitar puntos cortados a la derecha y abajo |

---

## 4. Página de L'Atelier (L'atelier)
*Archivo:* `app/atelier/page.tsx`, `app/globals.css`.

### A. Indicadores Estadísticos (`.stats`)
Reemplazar los 4 indicadores genéricos actuales por los **5 indicadores exactos** suministrados por Pierre-Hugo:

```typescript
// ANTES (4 items):
[["18+", "Années d’expérience"], ["120", "Projets réalisés"], ["4", "Typologies d’espaces"], ["100%", "Honoraires à prix fixe"]]

// DESPUÉS (5 items exactos):
[
  { number: "10+", label: "Années d'expérience", fullText: "Plus de 10 années d'expérience" },
  { number: "50+", label: "Projets conçus et accompagnés", fullText: "Plus de 50 projets conçus et accompagnés" },
  { number: "4500+ m²", label: "Construits ou réhabilités", fullText: "Plus de 4500 m² construits ou réhabilités" },
  { number: "100+", label: "Visites de chantier chaque année", fullText: "100+ visites de chantier chaque année" },
  { number: "0", label: "Projet copié-collé", fullText: "0 projet copié-collé" }
]
```

### B. Texto de Presentación e Historia (`.atelier-intro`)
Reemplazar el texto anterior por la redacción oficial aprobada:
> *"Fondé en 2024, Atelier Romain accompagne les particuliers, les professionnels et les collectivités dans la conception d’espaces adaptés à leurs besoins et à leurs aspirations.*
>
> *Chaque projet naît d’une écoute attentive, d’une compréhension fine de son contexte et d’une rigueur technique mise au service des usages.*
>
> *Ancrés en Provence, nous cultivons une connaissance approfondie du territoire, de ses contraintes climatiques, de ses particularités constructives et de la richesse de son patrimoine bâti."*

### C. Filosofía (`.philosophy`)
Reemplazar el encabezado/titular por:
> *"Nous imaginons des espaces qui enrichissent le quotidien, où esthétique, fonctionnalité et durabilité se conjuguent naturellement."*
*(Los 3 pilares siguientes quedan validados y se conservan: 01 Écoute et sur-mesure, 02 Ancrage territorial, 03 Transparence).*

### D. Método / Proceso (`.process`)
- **Nuevo título de sección:**
  - Cambiar *"Un accompagnement complet."* por: **"Un projet maitrisé de A à Z"**
- **Nuevo párrafo explicativo:**
  - *"De la première esquisse à la réception des travaux, nous vous accompagnons à chaque étape avec méthode, transparence et exigence. Un dialogue constant et des décisions partagées pour faire avancer votre projet en toute confiance."*
- **Nuevas 4 etapas:**
  1. **Écouter & comprendre**
  2. **Imaginer & concevoir**
  3. **Étudier & concrétiser**
  4. **Coordonner & réaliser**

---

## 5. Fusión de la Página Prestations en L'Atelier
*Archivos:* `app/atelier/page.tsx`, `app/prestations/page.tsx`.

- **Requerimiento del cliente:**
  > *"Ce lien mène sur une page qui n'apparait pas dans le header. Le contenu est pertinent : il faudrait fusionner la page PRESTATION https://tan-falcon-358163.hostingersite.com/prestations/#permis et la page ATELIER"*
- **Implementación técnica:**
  1. En `app/atelier/page.tsx`, incorporar una sección dedicada a **Prestations / Champs d'intervention** (las 6 especialidades: Rénovation, Extension, Construction neuve, Permis & autorisations, Aménagement intérieur, Suivi de chantier).
  2. Añadir los identificadores de anclaje `id="permis"` e `id="renovation"` en la página `/atelier` para que los enlaces del footer (`/atelier#permis`, `/atelier#renovation`) lleguen exactamente a ese contenido.
  3. Mantener una ruta estática de transición en `app/prestations/page.tsx` que redirija a `/atelier` conservando el fragmento; configurar además una redirección 301 en `.htaccess` para Hostinger. Quitar `/prestations` del sitemap.

---

## 6. Página de Proyectos (Projets) y Solución de Autogestión
*Archivo:* `app/projets/page.tsx`, `data/projects.ts`.

1. **Nuevo texto de introducción del Hero:**
   - **Antes:** *Chaque projet est une réponse singulière à un lieu, des usages et une histoire.*
   - **Después:**
     > *"Nous concevons chaque projet comme une réponse juste et singulière à son contexte, à son histoire et à vos aspirations."*
2. **Respuesta a la consulta de Pierre-Hugo:**
   - **Pregunta del cliente:** *"Pour le contenu des projets : je pourrai bien modifier moi même pour gagner du temps ?"*
   - **Solución técnica para el cliente:**
     - En la arquitectura Next.js actual, todos los proyectos residen en un archivo estructurado y limpio: `data/projects.ts` (con sus fotos en `public/assets/projects/{slug}/`).
     - Para que Pierre-Hugo o el equipo puedan editar proyectos sin tocar código complejo, se pueden ofrecer dos alternativas inmediatas:
       1. **Opción A (Inmediata y sencilla):** Estructura en archivo JSON/TypeScript comentado con instrucciones paso a paso para añadir proyectos y fotos.
       2. **Opción B (CMS visual, pendiente de evaluación):** Elegir una interfaz para editar textos y fotos, verificando autenticación, costos y reconstrucción/publicación del sitio estático. No se ha elegido ni implementado un CMS.

---

## 7. Checklist de Archivos y Tareas a Ejecutar

- [x] **CSS Global (`app/globals.css`):**
  - [x] Aumentar escala tipográfica de `.eyebrow` y fuentes secundarias.
  - [x] Invertir `.dot-pattern` del footer: fondo claro/arena con puntos verde oliva.
  - [x] Extender altura/padding del `.brand-divider` para dar margen inferior a los puntos.
  - [x] Calibrar dimensiones de `.dot-square` y fondos con tramas para eliminar puntos cortados en los bordes.
- [x] **Header (`components/Header.tsx`):**
  - [x] Aumentar tamaño del logo.
  - [x] Aumentar tamaño de fuente y espaciado de navegación.
- [x] **Footer (`components/Footer.tsx`):**
  - [x] Cambiar descripción a `"Architecture juste et vivante"`.
  - [x] Cambiar enlaces de Prestations hacia `/atelier#permis` y `/atelier#renovation`.
- [x] **Carrusel Hero (`components/HomeHero.tsx`):**
  - [x] Reemplazar indicadores de carrusel por los puntos oficiales de marca (`point_olive.png`).
- [x] **Home Page (`app/page.tsx`):**
  - [x] Ajustar redacción del manifiesto: *"Une architecture ancrée dans son territoire..."*.
  - [x] Cambiar titular del servicio a: *"Construire, rénover, transformer"*.
  - [x] Enlazar botón de servicios a `/atelier`.
- [x] **Contacto (`app/contact/page.tsx`):**
  - [x] Cambiar texto introductorio del hero.
  - [x] Agregar campo de entrada para teléfono.
  - [x] Cambiar etiqueta a *"Quelques mots sur votre projet"*.
  - [x] Actualizar dirección y teléfono `06.81.54.12.78`.
- [x] **L'Atelier (`app/atelier/page.tsx`):**
  - [x] Reemplazar las 4 estadísticas por los 5 indicadores exactos.
  - [x] Actualizar texto de historia y presentación del estudio.
  - [x] Actualizar titular de filosofía.
  - [x] Cambiar título del método a *"Un projet maitrisé de A à Z"*.
  - [x] Actualizar texto explicativo y las 4 fases del proceso.
  - [x] Integrar el contenido de la página Prestations con sus anclas `#permis` y `#renovation`.
- [x] **Proyectos (`app/projets/page.tsx`):**
  - [x] Actualizar frase introductoria de la galería de proyectos.
- [x] **Construcción y Verificación (`npm run build`):**
  - [x] Compilación y TypeScript correctos; exportación `out/` generada; 64 referencias comprobadas sin fallos; cuatro páginas verificadas a 1440, 1024 y 390 px sin desbordes, incluidos servicios, teléfono y redirección con ancla.
