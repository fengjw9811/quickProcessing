const { app, BrowserWindow } = require('electron')
app.on('ready', function() {
    let mainWindow = new BrowserWindow({
        show: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        },
        resizable: false
    })
    mainWindow.maximize()
    mainWindow.show()
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(mainWindow.webContents)
    mainWindow.loadFile('index.html')
    mainWindow.on('close', () => {
        mainWindow = null
    })
})