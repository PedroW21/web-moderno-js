const {app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => 
{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.handle('ping', () => 'pong')

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()

    // aqui estamos com o app rodando mas n tem nenhuma janela aberta (no caso do macos), ai pedimos pra criar uma (pois como ja vai estar rodando, a whenReady vai ter sido executada, e a activate não)
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

// no macos geralmente fica em segundo plano mesmo se pedir pra fechar, então vamos fazer algo diferente
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})

