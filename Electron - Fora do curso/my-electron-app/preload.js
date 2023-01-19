const { contextBridge, ipcRenderer } = require('electron');

//aqui estamos expondo processos internos (protegidos, que requerem privilegios) para o usuario (no caso poder ser utilizado na aplicação)
// por meio de um obj global
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
    //podemos expor variaveis tb
});

//This means it is not possible to access the Node.js APIs directly from the renderer process, nor the HTML Document Object Model (DOM) from the main process.
// Sendo assim um jeito de resolver isso é usando o pacote ipc