# Media Carousel - Carrusel de Videos e Imágenes

Carrusel moderno que muestra automáticamente videos e imágenes uno por uno.

## 🚀 Despliegue en Vercel

### Paso 1: Preparar tus archivos

Coloca todos tus archivos (imágenes y videos) en la carpeta `public/media/`
- Imágenes soportadas: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- Videos soportados: `.mp4`, `.webm`, `.ogg`, `.mov`

### Paso 2: Generar lista de archivos

Ejecuta el siguiente comando para generar automáticamente la lista de archivos:

\`\`\`bash
node scripts/generate-media-list.mjs
\`\`\`

Este script:
- Escanea la carpeta `public/media/`
- Detecta automáticamente todos los archivos multimedia
- Genera el archivo API con la lista completa
- Te muestra cuántos archivos encontró

### Paso 3: Desplegar

Desde v0:
1. Haz clic en el botón **"Publish"** en la esquina superior derecha
2. Selecciona tu proyecto de Vercel
3. ¡Listo! Tu carrusel estará en línea

O desde GitHub:
1. Sube tu proyecto a GitHub
2. Conecta tu repositorio en Vercel
3. Vercel desplegará automáticamente

## 📱 Características

- **Responsivo**: Funciona perfectamente en móvil, tablet y escritorio
- **Gestos táctiles**: Desliza para navegar en dispositivos táctiles
- **Reproducción automática**: Los videos se reproducen automáticamente
- **Controles intuitivos**: Flechas de navegación, play/pause, contador
- **Optimizado**: Carga eficiente de archivos multimedia

## 🛠️ Desarrollo Local

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Generar lista de archivos
node scripts/generate-media-list.mjs
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) para ver el carrusel.

## 📁 Estructura de Carpetas

\`\`\`
public/
  media/           <- Coloca aquí tus 977 archivos
    video1.mp4
    imagen1.jpg
    video2.mp4
    ...
\`\`\`

## 📝 Notas importantes

- Asegúrate de ejecutar `node scripts/generate-media-list.mjs` cada vez que agregues o elimines archivos
- Los archivos deben estar en `public/media/` para ser accesibles
- Vercel tiene límites de tamaño de archivos (máx. 50MB por archivo en el plan gratuito)
