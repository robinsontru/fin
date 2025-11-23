const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
  loadMediaFiles: () => ipcRenderer.invoke("load-media-files"),
  selectFolder: () => ipcRenderer.invoke("select-folder"),
})
