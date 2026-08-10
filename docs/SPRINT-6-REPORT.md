# SPRINT-6-REPORT

## Objetivo
Construir una sección Nosotros reutilizable, responsive y configurable, integrándola a la página principal como parte del flujo Navbar → Hero → About → Placeholders.

## Componentes creados

Ubicación: src/sections/About/
- AboutSection.tsx — composición principal; respeta feature flags `about` y `differentiators`.
- AboutContent.tsx — contenido de empresa: descripción, misión y visión.
- Differentiators.tsx — grilla configurable de diferenciadores.
- index.ts — barrel de exportaciones.

## Configuración utilizada

Se extendieron los contratos en src/types/index.ts:
- Differentiator (id, title, description; campos opcionales icon e image reservados para futuro).
- Company: nuevos campos aboutTitle, aboutSubtitle, aboutDescription, mission, vision, differentiators[], aboutMetrics?, aboutCertifications?.

Se pobló src/data/company.ts con valores de ejemplo no específicos de ningún cliente real.

## Decisiones de diseño
- AboutContent reutiliza SectionTitle del Design System para mantener jerarquía tipográfica consistente.
- Misión y Visión se implementaron como artículos semánticos con identidad cromática diferenciada (primaryColor / accentColor) desde theme.ts, sin hardcode.
- Differentiators usa InfoCard del Design System, heredando estilos de branding de forma centralizada.
- AboutSection verifica `featureFlags.about` antes de renderizar; si es false devuelve null.
- Los diferenciadores también verifican `featureFlags.differentiators` para habilitarse independientemente.
- Los campos de escalabilidad futura (métricas, certificaciones, experiencia, timeline) están reservados en el tipo Company pero no implementados visualmente.

## Responsive aplicado
- Mobile first en una columna para misión/visión y diferenciadores.
- Tablet (≥ 768px): diferenciadores en 2 columnas.
- Desktop (≥ 1024px): misión/visión en 2 columnas, diferenciadores en 3 columnas.
- Implementado mediante clases CSS globales `about-mv-grid` y `differentiators-cards` en src/styles/index.css.

## Validaciones realizadas
- npm run build: correcto
- npm run lint: correcto

## Recomendaciones para Sprint 7
- Construir ServicesSection consumiendo el arreglo services[] de clientConfig.
- Aplicar el mismo patrón feature flag para habilitar/deshabilitar la sección.
- Reutilizar InfoCard o crear ServiceCard como extensión de BaseCard si se necesitan variantes específicas.
- Mantener textos de los servicios únicamente en src/data/services.ts.
