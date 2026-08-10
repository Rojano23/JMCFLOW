# ARCHITECTURE

## Vision arquitectonica
DEV-WEBPAGES-RX23 sigue una arquitectura de plantilla reusable orientada a sitios corporativos estaticos.

Principios:
- Separacion de contenido y presentacion.
- Configuracion centralizada por cliente.
- Componentes reutilizables de bajo acoplamiento.
- Evolucion incremental sin romper el MVP.

## Diagrama de alto nivel
```text
src/data/*  --->  clientConfig.ts  --->  pages/HomePage.tsx  --->  sections/*  --->  components/*
                     |                      |                      |
                     |                      |                      +--> layout/ui/cards/navigation
                     |                      +--> orden de composicion
                     +--> contratos types/index.ts
```

## Separacion de responsabilidades

### src/data
Contiene datos de negocio y configuracion editable por cliente.

### src/types
Define contratos TypeScript compartidos para toda la plantilla.

### src/styles
Contiene tokens de diseno y estilos globales.

### src/components
Contiene building blocks reutilizables:
- layout
- navigation
- cards
- ui

### src/sections
Contiene secciones de pagina, compuestas con componentes reutilizables y datos de clientConfig.

### src/pages
Define la composicion de secciones por pagina.

## Estructura de src
```text
src/
├── components/
│   ├── cards/
│   ├── layout/
│   ├── navigation/
│   └── ui/
├── data/
├── pages/
├── sections/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

## Flujo de datos
1. Los datos se definen en src/data (company, services, industries, projects, theme, seo, features).
2. src/data/clientConfig.ts consolida la configuracion en un objeto unico.
3. Las secciones consumen clientConfig y renderizan segun feature flags.
4. Los componentes visuales consumen theme/tokens y props tipadas.
5. SeoMetadata sincroniza metadatos del head desde configuracion SEO.

## clientConfig como punto de integracion
Archivo: src/data/clientConfig.ts

Responsabilidades:
- Unificar configuracion de cliente.
- Exponer version canonicamente consumida por UI.
- Permitir override parcial con createClientConfig para testing o escenarios futuros.

## Feature Flags
Archivo: src/data/features.ts

Flags actuales:
- about
- services
- industries
- projects
- differentiators
- whatsapp
- socialLinks
- contactForm
- maps

Objetivo:
- Activar/desactivar bloques sin tocar logica principal.

## Design System
El diseno se apoya en:
- src/styles/tokens.ts como fuente de valores base.
- src/data/theme.ts como tema consumido por componentes.

Regla:
- Evitar literales de color/espaciado repetidos fuera de tokens/theme.

## Pages, Sections y Components

### Pages
Definen el orden de secciones.

### Sections
Representan bloques de negocio (Hero, About, Services, etc.).

### Components
Resuelven piezas de interfaz reutilizables (botones, cards, layout, navegacion).

## Decisiones arquitectonicas vigentes
- Sitio de una pagina, estatico, sin backend.
- Configuracion por archivos TypeScript, no CMS.
- Build con Vite para hosting estatico.
- Sin dependencias externas para SEO o estado global.

## Reglas para evolucion
- Cambios de cliente: solo src/data y assets.
- Cambios de arquitectura: discutir en docs antes de implementar.
- No introducir logica de negocio en componentes UI base.
