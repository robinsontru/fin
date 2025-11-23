const { app, BrowserWindow, ipcMain, dialog } = require("electron")
const path = require("path")
const fs = require("fs").promises
const isDev = process.env.NODE_ENV !== "production"

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#000000",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
    fullscreen: false,
    resizable: true,
  })

  const startURL = isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../out/index.html")}`

  mainWindow.loadURL(startURL)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// IPC handler para cargar archivos de la carpeta media
ipcMain.handle("load-media-files", async () => {
  try {
    const mediaPath = isDev ? path.join(process.cwd(), "public", "media") : path.join(process.resourcesPath, "media")

    console.log("[Electron] Buscando archivos en:", mediaPath)

    const files = await fs.readdir(mediaPath)

    const mediaFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".mp4", ".webm", ".mov"].includes(ext)
      })
      .map((file) => {
        const ext = path.extname(file).toLowerCase()
        const isVideo = [".mp4", ".webm", ".mov"].includes(ext)

        return {
          type: isVideo ? "video" : "image",
          src: isDev ? `/media/${file}` : `media://${file}`,
          name: file,
        }
      })

    console.log("[Electron] Archivos encontrados:", mediaFiles.length)
    return mediaFiles
  } catch (error) {
    console.error("[Electron] Error al cargar archivos:", error)
    return []
  }
})

// IPC handler para seleccionar carpeta personalizada
ipcMain.handle("select-folder", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory"],
  })

  if (result.canceled || result.filePaths.length === 0) {
    return null
  }

  const folderPath = result.filePaths[0]

  try {
    const files = await fs.readdir(folderPath)

    const mediaFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".mp4", ".webm", ".mov"].includes(ext)
      })
      .map((file) => {
        const ext = path.extname(file).toLowerCase()
        const isVideo = [".mp4", ".webm", ".mov"].includes(ext)
        const filePath = path.join(folderPath, file)

        return {
          type: isVideo ? "video" : "image",
          src: `file://${filePath}`,
          name: file,
        }
      })

    return mediaFiles
  } catch (error) {
    console.error("[Electron] Error al leer carpeta:", error)
    return null
  }
})
