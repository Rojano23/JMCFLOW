# ARCH-REVIEW-v1.0

## Resumen ejecutivo

Se realizó una revisión arquitectónica del estado actual del proyecto en el contexto de los documentos de [docs/MVP-Specification-v1.0.md](docs/MVP-Specification-v1.0.md), [docs/Project-Charter-v1.0.md](docs/Project-Charter-v1.0.md) y [docs/Roadmap-v1.0.md](docs/Roadmap-v1.0.md).

El proyecto se encuentra en una fase inicial saludable y alineada con el objetivo de Sprint 0/Sprint 1: preparar infraestructura base, separar contenido de presentación y dejar una base reutilizable para desarrollo posterior. No se detectaron errores de TypeScript ni de lint en la revisión actual.

## Hallazgos

### 1. Alineación con la arquitectura propuesta

- La estructura base cumple el objetivo general de separar lógica de presentación y datos.
- El proyecto ya incorpora carpetas clave como [src/data](src/data), [src/types](src/types), [src/styles](src/styles), [src/components](src/components) y [src/sections](src/sections), lo cual es coherente con la arquitectura descrita en el charter.
- El componente raíz [src/App.tsx](src/App.tsx) consume datos desde [src/data/company.ts](src/data/company.ts) y [src/data/features.ts](src/data/features.ts), lo que demuestra una primera separación entre configuración y presentación.

### 2. Estructura de carpetas

- La estructura actual es adecuada para una primera iteración, pero aún es relativamente plana.
- Falta una capa más explícita de composición de páginas o vistas, como una carpeta [src/pages](src/pages) o una carpeta de layouts que encapsule la estructura general del sitio.
- La división de componentes en [src/components/layout](src/components/layout), [src/components/navigation](src/components/navigation), [src/components/cards](src/components/cards) y [src/components/ui](src/components/ui) es correcta, aunque debería consolidarse con convenciones de naming y responsabilidad más estrictas antes de escalar.

### 3. Configuración de TypeScript

- [tsconfig.app.json](tsconfig.app.json) está bien configurado para una app React/Vite con `strict: true` y reglas de calidad como `noUnusedLocals` y `noUnusedParameters`.
- La configuración actual es suficiente para una base inicial y evita problemas tempranos de tipado.
- Sin embargo, el proyecto todavía depende de objetos y arrays sin contratos explícitos en [src/data/company.ts](src/data/company.ts), [src/data/services.ts](src/data/services.ts), [src/data/industries.ts](src/data/industries.ts), [src/data/projects.ts](src/data/projects.ts) y [src/data/features.ts](src/data/features.ts).
- Esto representa una oportunidad importante para reforzar la arquitectura antes de implementar visuales o secciones más complejas.

### 4. Configuración de Tailwind

- [tailwind.config.ts](tailwind.config.ts) está funcional y permite el escaneo correcto de archivos en [src](src).
- La configuración actual es mínima y suficiente para Sprint 1, pero aún no establece una base de design tokens.
- Falta una definición explícita de tema visual (colores, espaciados, tipografías, radios y breakpoints), lo cual será importante para evitar dispersión de estilos y duplicación en etapas posteriores.

### 5. Configuración de ESLint

- [eslint.config.js](eslint.config.js) está operativo y el proyecto pasó la verificación de lint.
- La configuración cubre la base necesaria para React y TypeScript.
- Aún no se incorporan reglas más estrictas de calidad y seguridad, como:
  - orden de imports,
  - consistencia de naming,
  - accesibilidad en JSX,
  - límites de complejidad.

### 6. Archivos ubicados en src/data

- Los archivos de datos actuales cumplen con la idea de desacoplar contenido y presentación.
- La presencia de módulos separados por dominio de negocio es positiva y refleja una buena dirección.
- No obstante, la información está expuesta como objetos simples sin una capa de tipos compartidos ni un punto central de acceso.
- Esto puede llevar a problemas de mantenimiento a medida que aumenten los datos y las necesidades de personalización por cliente.

## Riesgos

### Riesgo 1: pérdida de consistencia de arquitectura
Si el proyecto sigue creciendo sin contratos de datos claros, la lógica de presentación podría empezar a depender de estructuras ad hoc y poco explícitas.

### Riesgo 2: acoplamiento prematuro entre datos y UI
Aunque la separación ya existe, el componente [src/App.tsx](src/App.tsx) todavía actúa como un punto de demostración y puede convertirse en un contenedor excesivamente cargado si se agregan secciones visuales sin una capa de composición adicional.

### Riesgo 3: deriva visual temprana sin sistema de diseño
La ausencia de tokens de diseño en Tailwind puede generar estilos dispersos, inconsistencias visuales y mayor esfuerzo de mantenimiento cuando lleguen las primeras secciones del MVP.

### Riesgo 4: deuda técnica en reglas de calidad
El proyecto no cuenta aún con una capa de validación más robusta para asegurar consistencia en naming, imports y accesibilidad.

### Riesgo 5: falta de preparación para múltiples clientes
La arquitectura está bien encaminada, pero aún no se ha formalizado un patrón claro para que un nuevo cliente pueda reemplazar o extender datos sin tocar la lógica principal.

## Recomendaciones

1. Formalizar contratos de datos
   - Definir interfaces compartidas para empresa, servicios, industrias, proyectos, SEO y feature flags.
   - Usar estos tipos desde los módulos de [src/data](src/data) para evitar estructuras implícitas.

2. Crear una capa de composición de páginas
   - Incorporar una carpeta [src/pages](src/pages) o un equivalente de vistas para separar la composición del sitio de los componentes reutilizables.

3. Definir un sistema de diseño temprano
   - Extender [tailwind.config.ts](tailwind.config.ts) con colores, tipografías, radios, sombras y breakpoints base.
   - Esta decisión debe tomarse antes de desarrollar secciones visuales del MVP.

4. Fortalecer la gobernanza de calidad
   - Ampliar [eslint.config.js](eslint.config.js) con reglas adicionales para imports, accesibilidad y consistencia.
   - Considerar agregar formato automático con Prettier en una siguiente iteración.

5. Establecer una convención de estructura de componentes
   - Definir claramente qué va en [src/components/ui](src/components/ui), [src/components/layout](src/components/layout), [src/components/navigation](src/components/navigation) y [src/components/cards](src/components/cards).

6. Preparar la base para pruebas y escalabilidad
   - Incorporar pruebas unitarias y de componentes antes de avanzar con secciones completas del MVP.
   - Esto reducirá el riesgo de regresiones cuando la plantilla se reutilice para nuevos clientes.

## Acciones sugeridas

### Corto plazo
- Crear un archivo central de tipos en [src/types](src/types) y usarlo desde todos los módulos de datos.
- Añadir un barrel de exportación en [src/data](src/data) para centralizar el acceso a la configuración.
- Separar la composición visual de [src/App.tsx](src/App.tsx) en un componente de layout o página base.
- Definir los tokens iniciales de diseño en [tailwind.config.ts](tailwind.config.ts).

### Mediano plazo
- Introducir una estructura de páginas y secciones más explícita.
- Agregar reglas de lint más estrictas y una estrategia de testing.
- Preparar una guía interna de arquitectura para que futuros cambios no rompan el principio de reutilización.

## Conclusión

El proyecto está bien encaminado para Sprint 1. La arquitectura base es coherente con la visión del MVP y del charter, y ya existe una separación inicial entre contenido y presentación. La mayor oportunidad de mejora está en fortalecer los contratos de datos, formalizar la composición de la interfaz y establecer un sistema de diseño temprano para evitar deuda técnica antes del desarrollo visual.
