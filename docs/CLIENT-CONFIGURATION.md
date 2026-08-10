# CLIENT-CONFIGURATION

## Objetivo
Configurar un nuevo cliente sin modificar la logica principal de la plantilla.

## Archivos de configuracion obligatorios

### src/data/company.ts
Define identidad y contenido corporativo principal:
- nombre
- tagline
- hero
- about
- contacto
- redes
- whatsapp

### src/data/services.ts
Lista de servicios mostrados en la seccion Services.

### src/data/industries.ts
Lista de industrias o sectores atendidos.

### src/data/projects.ts
Lista de proyectos/experiencia publicada.

### src/data/theme.ts
Tema visual aplicado por la app. Debe apoyarse en src/styles/tokens.ts.

### src/data/seo.ts
Metadatos SEO basicos:
- title
- description
- keywords
- favicon
- canonical
- ogTitle
- ogDescription
- ogImage
- ogType

### src/data/features.ts
Controla visibilidad de secciones y bloques via feature flags.

## Que SI puede modificar un cliente nuevo
- Todo el contenido de src/data/company.ts.
- Catalogos de src/data/services.ts, src/data/industries.ts y src/data/projects.ts.
- Valores de branding en src/data/theme.ts.
- Metadatos SEO en src/data/seo.ts.
- Flags en src/data/features.ts.
- Assets en public/ y src/assets/.

## Que NO debe modificar
- Componentes base en src/components para personalizar contenido.
- Logica de render en src/sections solo para cambiar textos.
- Contratos de src/types sin razon arquitectonica.
- Scripts de build/lint salvo necesidad tecnica aprobada.

## Reglas de consistencia
- Mantener tipado valido segun src/types/index.ts.
- Usar URLs completas para enlaces externos.
- Si no hay canonical real, mantener canonical vacio.
- Si se activa socialLinks, proveer al menos una red con URL.
- Si se activa maps, validar googleMapsUrl.

## Validacion minima despues de configurar
1. npm run lint
2. npm run build
3. Revisar anchors y feature flags
4. Revisar SEO basico y favicon
5. Revisar responsive

## Errores comunes a evitar
- Hardcodear informacion del cliente dentro de componentes.
- Duplicar valores visuales en componentes en lugar de theme/tokens.
- Publicar con canonical placeholder o vacio no intencional.
- Dejar redes activas sin URLs validas.
