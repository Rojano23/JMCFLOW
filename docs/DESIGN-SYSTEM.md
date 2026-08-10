# DESIGN-SYSTEM

## Objetivo
Documentar componentes base reutilizables y su uso correcto para mantener consistencia visual y tecnica.

## Fundamentos
- Tokens base: src/styles/tokens.ts
- Tema consumible: src/data/theme.ts
- Componentes no deben hardcodear contenido de cliente.

## Componentes

### Button
Archivo: src/components/ui/Button.tsx

Proposito:
- Acciones principales y secundarias.

Uso recomendado:
- variant: primary, secondary, ghost
- size: sm, md, lg
- ariaLabel en botones iconicos o ambiguos.

Restricciones:
- No usar para navegacion de enlaces externos/internos (usar anchor/NavigationLink).

### Badge
Archivo: src/components/ui/Badge.tsx

Proposito:
- Etiquetas cortas de estado o metadata.

Uso recomendado:
- tone: primary, accent, neutral.

Restricciones:
- No reemplaza headings ni texto descriptivo largo.

### SectionTitle
Archivo: src/components/ui/SectionTitle.tsx

Proposito:
- Encabezado estandar de secciones.

Uso recomendado:
- as: h1/h2/h3 segun jerarquia semantica.
- eyebrow para contexto corto.
- subtitle para apoyo descriptivo.

Restricciones:
- Respetar unica ocurrencia de h1 por pagina principal.

### BaseCard
Archivo: src/components/cards/BaseCard.tsx

Proposito:
- Contenedor visual estandar para tarjetas.

Uso recomendado:
- interactive y onActivate para card clickeable accesible.
- ariaLabel cuando el contenido no sea autoexplicativo.

Restricciones:
- No inyectar logica de negocio; solo presentacion e interaccion base.

### InfoCard
Archivo: src/components/cards/InfoCard.tsx

Proposito:
- Variante de tarjeta con titulo, descripcion y badge opcional.

Uso recomendado:
- Datos cortos y legibles.

Restricciones:
- Evitar contenido excesivo que rompa consistencia del grid.

### Container
Archivo: src/components/layout/Container.tsx

Proposito:
- Limitar ancho y centralizar contenido.

Uso recomendado:
- size: narrow, content, wide segun contexto.

Restricciones:
- No duplicar paddings horizontales extremos en elementos hijos.

### Section
Archivo: src/components/layout/Section.tsx

Proposito:
- Estructura estandar de bloque con spacing y soporte de anclas.

Uso recomendado:
- spacing: sm, md, lg
- ariaLabel para landmarks claros.

Restricciones:
- No usar section anidada sin necesidad semantica.

### PageWrapper
Archivo: src/components/layout/PageWrapper.tsx

Proposito:
- Layout raiz de pagina (main, tipografia base, fondo, color).

Uso recomendado:
- Componente contenedor principal de cada pagina.

Restricciones:
- No duplicar multiples main en una misma pagina.

## Buenas practicas globales
- Consumir siempre theme/tokens para estilos.
- Mantener props tipadas y explicitas.
- Mantener accesibilidad: aria-label, foco visible, jerarquia de headings.
- Evitar side effects en componentes UI puros.
