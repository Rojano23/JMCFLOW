# Instrucciones de desarrollo para DEV-WEBPAGES-RX23

## Contexto del proyecto
- Proyecto: DEV-WEBPAGES-RX23
- Tipo: plantilla reutilizable para sitios web corporativos
- Fase actual: Sprint 17 / documentacion final para Release Candidate
- Fuente de verdad: los documentos de la carpeta docs/

## Principios obligatorios
- Priorizar reutilización, mantenibilidad y simplicidad.
- Mantener la separación entre contenido y presentación.
- Evitar hardcode de datos de clientes en componentes.
- Mantener el stack ligero y evitar dependencias innecesarias.
- Respetar el alcance del MVP: sitio corporativo estático, sin backend ni base de datos.
- No introducir funcionalidades nuevas sin base documental o aprobación explícita.

## Arquitectura esperada
- La lógica de presentación vive en src/.
- Los datos de negocio y configuración viven en src/data/.
- Los tipos compartidos deben centralizarse en src/types/.
- Los estilos globales deben mantenerse en src/styles/.
- Los componentes deben ser genéricos y reutilizables entre clientes.

## Reglas de implementación
- Preferir componentes pequeños y reutilizables.
- Usar TypeScript y tipado explícito siempre que sea posible.
- Mantener los datos de cliente en archivos como company.ts, services.ts, industries.ts, projects.ts, theme.ts, seo.ts y features.ts.
- Evitar modificar directamente la lógica principal para adaptar un cliente específico.
- Documentar cambios relevantes en README.md o en la documentación del proyecto.

## Enfoque para Sprint 17 / Release Candidate
- Priorizar consistencia documental y mantenibilidad.
- Mantener separacion entre contenido configurable y logica de presentacion.
- No introducir funcionalidades fuera del alcance MVP sin aprobacion explicita.
- Documentar cualquier cambio tecnico relevante en README.md o docs/.

## Convenciones
- Usar nombres en inglés para módulos y archivos técnicos.
- Mantener el código limpio, legible y preparado para evolución.
- Revisar el impacto de los cambios sobre la reutilización del template.
