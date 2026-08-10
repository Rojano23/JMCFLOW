# SPRINT-13-REPORT

## Objetivo
Implementar un botón flotante de WhatsApp reutilizable, configurable y controlado por Feature Flags, alineado con la arquitectura RX23.

## Componentes creados

Ubicación: src/components/ui/
- WhatsAppButton.tsx

Exportado en:
- src/components/ui/index.ts

## Cambios realizados
- Se creó `WhatsAppButton` como componente reusable en la capa UI.
- El botón consume exclusivamente:
  - src/data/company.ts (`company.whatsapp`)
  - src/data/features.ts (`features.whatsapp`)
- Se integra en `HomePage.tsx` al final del árbol para mantenerse visible sobre todas las secciones.
- Se construye la URL dinámica con el formato:
  - `https://wa.me/<telefono>`
- Se normaliza el teléfono removiendo caracteres no numéricos antes de generar la URL.

## Decisiones tomadas
- Render condicional estricto:
  - si `features.whatsapp` es false, no renderiza.
  - si `company.whatsapp` está vacío, no renderiza.
- Se evitó hardcode de identidad visual usando `theme.ts` y `tokens.ts`.
- Se dejó preparado el componente para extensiones futuras (mensajes automáticos, tracking, campañas) sin implementarlas ahora.
- Se mantuvo una solución simple (sin sobreingeniería) para cumplir con el alcance del sprint.

## Accesibilidad
- Incluye `aria-label` descriptivo.
- Enlace accesible por teclado.
- Usa clase `focus-ring` ya existente para foco visible.
- Mantiene semántica de enlace externo con `target="_blank"` y `rel="noreferrer"`.

## Validaciones realizadas
- npm run build: correcto
- npm run lint: correcto

## Deuda técnica
- El componente no incluye aún mensaje predefinido para WhatsApp.
- No existe capa de tracking/analytics (pendiente por alcance).
- No hay control avanzado de formato internacional por país; actualmente se normaliza por eliminación de caracteres no numéricos.

## Recomendaciones Sprint 14
- Incorporar soporte opcional para mensaje inicial configurable en la URL de WhatsApp.
- Definir estrategia de tracking por campaña (utm/source) si el roadmap lo requiere.
- Añadir validación de formato de número en fase de configuración para reducir errores de enlace.
