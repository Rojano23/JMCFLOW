# DEV-WEBPAGES-RX23

Web corporativa industrial construida con React, Vite y TypeScript para crear sitios estaticos multi-cliente sin reescribir la logica principal.

## 1. Descripcion del proyecto
DEV-WEBPAGES-RX23 es un template orientado a acelerar la entrega de sitios corporativos modernos, responsivos y mantenibles. El enfoque principal es separar configuracion de negocio y presentacion para poder crear nuevos sitios cambiando datos y branding, no componentes base.

## 2. Objetivos
- Reducir tiempo de salida para nuevos clientes.
- Mantener una arquitectura limpia y reutilizable.
- Estandarizar calidad tecnica y visual en sitios corporativos.
- Permitir evolucion incremental sin romper el MVP.

## 3. Alcance MVP
Incluye:
- Sitio corporativo estatico de una pagina.
- Secciones: Hero, About, Services, Industries, Projects, Differentiators, Contact, Footer.
- Feature flags para habilitar/deshabilitar secciones y bloques.
- SEO tecnico basico.
- Navegacion responsive y boton de WhatsApp.

No incluye:
- Backend, base de datos, CMS, autenticacion, e-commerce, analitica avanzada.

## 4. Stack tecnologico
- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS (base del proyecto)
- ESLint

## 5. Arquitectura general
Principio clave: contenido configurable en src/data y logica visual reutilizable en src/components y src/sections.

Flujo simplificado:

1. Archivos de configuracion en src/data definen contenido, tema, SEO y flags.
2. src/data/clientConfig.ts unifica la configuracion consumida por la app.
3. Secciones renderizan de forma condicional segun feature flags.
4. Componentes UI/Layout aplican estilos y contratos reutilizables.

## 6. Estructura de carpetas
```text
.
├── docs/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── navigation/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## 7. Configuracion de cliente
La personalizacion para un nuevo cliente se realiza en:
- src/data/company.ts
- src/data/services.ts
- src/data/industries.ts
- src/data/projects.ts
- src/data/theme.ts
- src/data/seo.ts
- src/data/features.ts

No se debe modificar la logica principal de src/components ni src/sections para adaptar un cliente.

## 8. Instalacion
Requisitos:
- Node.js 20+
- npm 10+

Comando:
```bash
npm install
```

## 9. Ejecucion local
```bash
npm run dev
```

Servidor por defecto:
- http://localhost:5173

## 10. Build de produccion
```bash
npm run build
```

Preview local del build:
```bash
npm run preview
```

## 11. Deploy
El procedimiento detallado esta en docs/DEPLOYMENT.md para:
- GitHub Pages
- Cloudflare Pages
- Vercel

Nota actual:
- El build esta optimizado para raiz de dominio. Si se desplega en subruta, ajustar base en vite.config.ts.

## 12. Uso de Feature Flags
Archivo: src/data/features.ts

Flags disponibles:
- about
- services
- industries
- projects
- differentiators
- whatsapp
- socialLinks
- contactForm
- maps

Regla:
- Cambiar flags solo en configuracion. No hardcodear condiciones en componentes de cliente.

## 13. Uso de Theme
Archivos:
- src/styles/tokens.ts
- src/data/theme.ts

Regla:
- tokens.ts define valores base.
- theme.ts consume tokens para exponer tema de cliente.
- componentes deben consumir theme/tokens, no literales dispersos.

## 14. Flujo de trabajo recomendado
1. Crear rama de trabajo por sprint o funcionalidad.
2. Actualizar configuracion de cliente en src/data.
3. Ejecutar npm run lint.
4. Ejecutar npm run build.
5. Validar responsive, SEO basico y feature flags.
6. Actualizar documentacion relevante en docs/.
7. Commit con mensaje claro por alcance.

## 15. Roadmap resumido
- Sprint 0-1: infraestructura
- Sprint 2-4: configuracion, design system, navegacion
- Sprint 5-13: secciones del MVP + WhatsApp + footer
- Sprint 14: responsive QA
- Sprint 15: SEO basico
- Sprint 16: optimizacion y hardening
- Sprint 17: documentacion final
- Sprint 18: deploy

## 16. Estado actual del proyecto
Estado: Release Candidate documental y tecnico.

Completado:
- MVP funcional estatico
- Build y lint en verde
- SEO basico, feature flags y estructura semantica
- Hardening inicial de configuracion
- Documentacion base y guias operativas

Siguiente hito:
- Sprint 18 enfocado en despliegue controlado y checklist de release final.

## Documentacion complementaria
- docs/ARCHITECTURE.md
- docs/CLIENT-CONFIGURATION.md
- docs/NEW-CLIENT-CHECKLIST.md
- docs/DEPLOYMENT.md
- docs/RELEASE-CHECKLIST.md
- docs/DESIGN-SYSTEM.md
- docs/TECH-DEBT.md
# trigger
