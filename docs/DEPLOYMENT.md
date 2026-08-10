# DEPLOYMENT

## Objetivo
Documentar el proceso de despliegue sin modificar el codigo ni ejecutar deploy automatico.

## Requisitos previos
- Node.js 20+
- npm 10+
- Repositorio con cambios committeados

## Build local
```bash
npm install
npm run build
```

Salida esperada:
- dist/index.html
- dist/assets/*
- dist/favicon.svg

## Validaciones previas al deploy
- npm run lint
- npm run build
- Verificar configuracion SEO en src/data/seo.ts
- Verificar feature flags en src/data/features.ts

## Nota sobre subrutas
Por defecto Vite genera rutas pensadas para raiz de dominio.

Si se desplegara en subruta, ajustar base en vite.config.ts y regenerar build.

---

## Opcion A: GitHub Pages

### Flujo recomendado
1. Ejecutar build local.
2. Publicar contenido de dist/ en rama de publicacion (por ejemplo gh-pages) o usar GitHub Actions.
3. Configurar Pages para servir la rama/carpeta publicada.
4. Verificar carga de assets y anclas.

### Checklist especifico
- Dominio configurado en Settings de Pages.
- canonical en src/data/seo.ts apuntando al dominio final.
- favicon visible en sitio publicado.

---

## Opcion B: Cloudflare Pages

### Configuracion
- Framework preset: Vite
- Build command: npm run build
- Build output directory: dist

### Flujo
1. Conectar repositorio.
2. Configurar comando y output.
3. Desplegar.
4. Validar rutas y metadatos.

### Checklist especifico
- Variables de entorno solo si se requieren en futuro.
- Verificar redireccion HTTP -> HTTPS.

---

## Opcion C: Vercel

### Configuracion
- Framework preset: Vite
- Build command: npm run build
- Output directory: dist

### Flujo
1. Importar repositorio en Vercel.
2. Confirmar configuracion de build.
3. Ejecutar deploy.
4. Validar metadatos y responsive.

### Checklist especifico
- Dominio custom vinculado.
- canonical actualizado al dominio final.

---

## Post-deploy
1. Revisar homepage en mobile/tablet/desktop.
2. Verificar anclas de navbar.
3. Verificar enlaces externos y WhatsApp.
4. Verificar metadatos OG y favicon.
5. Confirmar que no hay 404 de assets.
