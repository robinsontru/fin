# Carrusel de Medios con Electron - Carga Automática

## ¿Cómo funciona?

**Tu carrusel carga automáticamente todos los archivos** sin necesidad de escribirlos manualmente en el código. Solo coloca tus archivos en la carpeta y listo.

### Carga Automática al Iniciar

1. **Coloca tus 977 archivos** en la carpeta `public/media/`
2. **Abre la aplicación** - automáticamente detectará y cargará TODOS los archivos
3. El carrusel escaneará estos formatos:
   - **Imágenes:** .jpg, .jpeg, .png, .gif, .webp
   - **Videos:** .mp4, .webm, .mov

**No necesitas editar ningún código.** El sistema detecta automáticamente todos los archivos en la carpeta.

### Selección Manual de Carpeta (Opcional)

También puedes cargar archivos desde cualquier ubicación:

1. Haz clic en el botón 📁 (esquina superior derecha)
2. Selecciona cualquier carpeta con tus archivos
3. El carrusel cargará automáticamente todo el contenido

## Instalación y Uso

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Preparar tus archivos

\`\`\`bash
# Crea la carpeta si no existe
mkdir -p public/media

# Copia tus 977 archivos a public/media/
# Ejemplo: cp /ruta/a/tus/archivos/* public/media/
\`\`\`

### 3. Probar en modo desarrollo

\`\`\`bash
# Terminal 1: Inicia Next.js
npm run dev

# Terminal 2: Inicia Electron
npm run electron:dev
\`\`\`

### 4. Crear el ejecutable final

\`\`\`bash
# Construir Next.js
npm run build

# Crear el ejecutable
npm run dist
\`\`\`

Esto generará:
- **Windows:** `dist/MediaCarousel Setup.exe`
- **Mac:** `dist/MediaCarousel.dmg`
- **Linux:** `dist/MediaCarousel.AppImage`

## Características del Carrusel

### Navegación
- **Flechas ← →:** Navegar entre archivos uno por uno
- **Puntos de progreso:** Saltar a un archivo específico (se ocultan si hay más de 50 archivos)
- **Contador:** Muestra posición actual (ej: "15 / 977")

### Reproducción Automática
- **Videos:** Se reproducen automáticamente y avanzan al terminar
- **Imágenes:** Se muestran 5 segundos antes de avanzar automáticamente
- **Botón Play/Pause:** Pausar/reanudar la reproducción automática

### Controles Adicionales
- **📁 Botón de carpeta:** Cambiar a otra carpeta de medios
- **Indicador de tipo:** Muestra si es "VIDEO" o "IMAGEN"
- **Pantalla completa:** Presiona F11 (ESC para salir)

## Estructura del Proyecto

\`\`\`
tu-proyecto/
├── electron/
│   ├── main.js          # Escanea automáticamente los archivos
│   └── preload.js       # Comunicación segura
├── public/
│   └── media/           # ← COLOCA TUS 977 ARCHIVOS AQUÍ
│       ├── foto1.jpg
│       ├── foto2.png
│       ├── video1.mp4
│       └── ... (hasta 977 archivos)
├── components/
│   └── media-carousel.tsx
└── dist/                # Ejecutables generados aquí
\`\`\`

## Cómo Funciona la Detección Automática

1. **Al iniciar**, Electron escanea `public/media/`
2. **Filtra** automáticamente solo imágenes y videos
3. **Crea una lista** con todos los archivos encontrados
4. **El carrusel los muestra** uno por uno en orden

**No necesitas hacer nada más.** Solo agregar los archivos a la carpeta.

## Solución de Problemas

### "No se encontraron archivos multimedia"

- ✓ Verifica que los archivos estén en `public/media/`
- ✓ Confirma que sean formatos soportados
- ✓ Usa el botón 📁 para seleccionar la carpeta manualmente

### Videos no se reproducen

- ✓ Haz clic en el botón Play si están pausados
- ✓ Verifica que sean formato .mp4 (el más compatible)

### El ejecutable es muy grande

- ✓ Es normal, incluye todos tus archivos multimedia
- ✓ Con 977 archivos, el tamaño depende del tamaño total de tus videos/imágenes

## Distribución

Para compartir la aplicación con otros:

### Opción 1: Con archivos incluidos
1. Crea el ejecutable: `npm run dist`
2. Los archivos de `public/media/` ya están incluidos
3. Comparte solo el ejecutable

### Opción 2: Sin archivos incluidos
1. Crea el ejecutable sin archivos en `public/media/`
2. Los usuarios pueden usar el botón 📁 para cargar sus propias carpetas
3. Ejecutable más pequeño y portable

## Comandos Rápidos

\`\`\`bash
# Desarrollo
npm run dev              # Servidor Next.js
npm run electron:dev     # Abrir con Electron

# Producción
npm run build           # Compilar Next.js
npm run dist           # Crear ejecutable

# Limpieza
rm -rf dist            # Borrar ejecutables antiguos
rm -rf .next           # Borrar caché de Next.js
\`\`\`

¡Tu carrusel está listo! Solo coloca los archivos y abre la aplicación.
