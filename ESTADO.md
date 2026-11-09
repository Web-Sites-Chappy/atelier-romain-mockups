# Estado del proyecto — 9 de noviembre de 2026

Documento de situación. Para el proyecto en general: [README.md](./README.md).

---

## En una línea

El sitio tiene el contenido definitivo de proyectos que mandó el cliente el
8/11/2026. Se mantiene a mano: se editan los JSON de `content/`, se compila y se
sube `out/` a Hostinger.

## Decisiones tomadas

| Decisión | Por qué |
|---|---|
| Sin panel de administración | El cliente no edita el sitio. Los cambios los hacemos nosotros y subimos a Hostinger a mano. El panel (Sveltia CMS) y el deploy automático por FTP se construyeron y se descartaron. |
| Contenido en `content/*.json` | Editar textos y proyectos sin tocar el código. |
| Fotos en JPG, máx. 2400 px | Los originales del cliente pesaban ~450 MB; optimizados, ~22 MB. `scripts/import-photos.mjs` lo hace. |

## Contenido de proyectos (8/11/2026)

11 proyectos, en el orden de las carpetas del cliente: L'Isle-sur-la-Sorgue,
Coustellet, Lagnes, Céreste, L'Isle-sur-la-Sorgue Saint-Antoine, Pernes,
Carpentras, Lagnes bureaux, Saint-Cyr-sur-Mer, Avignon, Saint-Marc-Jaumegarde.
Saint-Raphaël se quitó porque el cliente no lo incluyó.

Cada ficha tiene secciones con subtítulo, una lista de datos (`fields`) y meta
description propia.

### Pendiente de confirmar con el cliente

- **Carpentras** no trajo texto: sigue con el texto genérico anterior.
- **Datos vacíos** (`[   ] m²`, `[statut]`) se omitieron. Faltan sobre todo
  superficie, mission y statut en Lagnes, Céreste, L'Isle 2, Pernes, Lagnes
  bureaux, Saint-Cyr, Avignon y Saint-Marc.
- **Estados entre corchetes** publicados como propuesta: "Livré en 2023" (Lagnes),
  "Chantier en cours" (Céreste, Lagnes bureaux), "Livré en 2025" (Avignon),
  "Projet en cours" (Saint-Marc).
- **Avignon**: el texto repite "rangements" ("rangements, assises et rangements
  intégrés"). Se dejó como lo mandó.

---

## Pendientes conocidos

1. **El sitio entero está marcado como `noindex`.** `public/.htaccess` tiene
   `Header always set X-Robots-Tag "noindex, nofollow"`. Mientras esté, Google no
   indexa nada. Hay que sacarlo cuando el sitio salga con el dominio real.
2. **El formulario de contacto no envía nada.** Una exportación estática no puede
   mandar mails por sí sola; hace falta un servicio externo.
3. **El build local tarda varios minutos** porque `.next/` está dentro de OneDrive
   y se sincroniza mientras compila. Mover el proyecto fuera de OneDrive lo arregla.
4. **Tipos stale de Next.** Si el build falla con errores en
   `.next/dev/types/validator.ts`, son restos del servidor de desarrollo:
   borrar `.next` y `tsconfig.tsbuildinfo` y reconstruir.
5. **Ruta de Hostinger.** `DEPLOY-HOSTINGER.md` documenta una confusión previa de
   carpetas: el sitio va en `domains/tan-falcon-358163.hostingersite.com/public_html`.
