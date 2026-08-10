# SPRINT-11-REPORT

## Objetivo
Construir una Contact Section reutilizable, configurable, responsive y alineada con la arquitectura RX23, preparada para futuras integraciones sin backend propio.

## Componentes creados

Ubicación: src/sections/Contact/
- ContactSection.tsx — composición principal; integra datos de contacto, métodos, mapa y placeholder de formulario.
- ContactDetails.tsx — lista semántica de datos de contacto de empresa.
- ContactMethods.tsx — render de WhatsApp, correo y redes sociales configurables.
- ContactMap.tsx — bloque reutilizable para iframe de mapa con `googleMapsUrl`.
- ContactFormPlaceholder.tsx — placeholder de formulario para futuras integraciones con servicios estáticos.
- index.ts — barrel de exportaciones.

## Cambios realizados

### Configuración
Se extendió la configuración de empresa en src/data/company.ts con:
- phone
- email
- whatsapp
- address
- businessHours
- googleMapsUrl
- socialLinks

### Tipos
Se ampliaron los contratos en src/types/index.ts para que ContactDetails incluya:
- businessHours
- googleMapsUrl

### Feature flags
Se incorporó soporte condicional para:
- features.socialLinks
- features.maps
- features.contactForm

## Decisiones arquitectónicas
- La información de contacto vive únicamente en configuración central y no se hardcodea en componentes.
- El mapa se renderiza únicamente cuando `featureFlags.maps` está activado y hay `googleMapsUrl` configurado.
- El formulario es un placeholder estático para preparar futuras integraciones con Formspree, Netlify Forms u otros servicios compatibles con hosting estático.
- Se reutilizaron componentes del Design System para mantener coherencia visual con el resto del template.

## Responsive aplicado
- Diseño mobile-first.
- Bloques apilados verticalmente en móvil.
- Se deja preparado el layout para crecer hacia dos columnas en tablet/desktop si se requiera.

## Riesgos detectados
- El bloque de contacto está preparado para crecimiento, pero no incluye aún formularios reales ni integración CRM.
- El iframe del mapa depende de la URL proporcionada por configuración y no valida ni normaliza datos externos.

## Deuda técnica
- La sección está lista para futuras integraciones, pero aún no existe una estrategia de formularios real ni manejo de envíos.
- El esquema de contacto podría ampliarse para soportar múltiples teléfonos, correos o sedes en una siguiente iteración.

## Recomendaciones para Sprint 12
- Preparar un mecanismo de formulario real con integración a servicios estáticos o backend externo.
- Extender la configuración para soportar múltiples sedes y múltiples áreas de contacto.
- Definir una convención de accesibilidad para enlaces y botones de acción en secciones de contacto.
