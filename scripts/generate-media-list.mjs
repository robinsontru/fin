import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Directorio de medios
const mediaDir = path.join(__dirname, '..', 'public', 'media')
const outputFile = path.join(__dirname, '..', 'app', 'api', 'media-files', 'route.ts')

// Extensiones soportadas
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov']

console.log('📁 Escaneando carpeta:', mediaDir)

// Verificar si el directorio existe
if (!fs.existsSync(mediaDir)) {
  console.log('⚠️  La carpeta public/media no existe, creándola...')
  fs.mkdirSync(mediaDir, { recursive: true })
  console.log('✅ Carpeta creada. Coloca tus archivos allí y ejecuta este script nuevamente.')
  process.exit(0)
}

// Leer archivos
const files = fs.readdirSync(mediaDir)

// Filtrar y mapear archivos
const mediaFiles = files
  .filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext) || videoExtensions.includes(ext)
  })
  .map((file) => {
    const ext = path.extname(file).toLowerCase()
    const type = imageExtensions.includes(ext) ? 'image' : 'video'
    
    return {
      type,
      src: `/media/${file}`,
      name: file,
    }
  })

console.log(`✅ Encontrados ${mediaFiles.length} archivos multimedia`)

// Generar el contenido del archivo
const fileContent = `import { NextResponse } from "next/server"

// Este archivo fue generado automáticamente por scripts/generate-media-list.mjs
// Total de archivos: ${mediaFiles.length}

export async function GET() {
  const mediaFiles = ${JSON.stringify(mediaFiles, null, 2)}

  return NextResponse.json(mediaFiles)
}
`

// Escribir el archivo
fs.writeFileSync(outputFile, fileContent, 'utf-8')

console.log('✅ Archivo generado:', outputFile)
console.log(`📊 Total: ${mediaFiles.length} archivos (${mediaFiles.filter(f => f.type === 'image').length} imágenes, ${mediaFiles.filter(f => f.type === 'video').length} videos)`)
