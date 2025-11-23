# Carrusel de Media - Despliegue en Vercel

Este carrusel ahora está optimizado para desplegarse en Vercel sin necesidad de Electron.

## Instrucciones de Uso

### 1. Agregar tus Archivos

Coloca todos tus 977 archivos (imágenes y videos) en la carpeta:
\`\`\`
public/media/
\`\`\`

El carrusel detectará automáticamente todos los archivos con estas extensiones:
- **Imágenes**: .jpg, .jpeg, .png, .gif, .webp, .svg
- **Videos**: .mp4, .webm, .ogg, .mov

### 2. Desarrollo Local

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Desplegar en Vercel

Tienes 3 opciones:

#### Opción A: Desde v0 (Más Fácil)
1. Haz clic en el botón "Publish" en la parte superior derecha
2. Vercel se encargará de todo automáticamente

#### Opción B: Desde GitHub
1. Sube tu proyecto a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará Next.js automáticamente y lo desplegará

#### Opción C: Vercel CLI
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Características

- Reproducción automática de videos
- Transiciones suaves entre media
- Controles de navegación (flechas)
- Play/Pause
- Contador de posición
- Indicador de tipo de media
- Responsive y moderno
- Carga dinámica de archivos

## Notas Importantes

- Los archivos deben estar en `public/media/` antes de hacer el build
- Vercel tiene un límite de tamaño por deployment (generalmente 100MB)
- Si tienes muchos videos grandes, considera usar Vercel Blob u otro servicio de almacenamiento
- El carrusel funcionará con cualquier cantidad de archivos

## Solución para Muchos Archivos Grandes

Si tus 977 archivos son muy pesados para Vercel, considera:

1. **Vercel Blob**: Almacenamiento de archivos de Vercel
2. **Cloudinary**: CDN para media
3. **AWS S3**: Almacenamiento cloud
4. **Supabase Storage**: Alternativa open source

Puedo ayudarte a integrar cualquiera de estas opciones si lo necesitas.
