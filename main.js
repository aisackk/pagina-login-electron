//Importando os módulos app e BrowserWindow do Electron
const { app, BrowserWindow } = require('electron')

//Define a função createwindow que é responsável cria uma nova janela do aplicativo Electron
const createWindow = () => {
    //Cria uma nova instância do BrowserWindowcom as dimensões especificadas
  const win = new BrowserWindow({
    width: 800, //Define a largura da janela
    height: 600 //Define a altura da janela
  })
//carrega o arquivo index.html na janela criada
  win.loadFile('index.html')
}
//Quando o aplicativo estiver pronto, chama a funcao createwindow para criar a janela principal
app.whenReady().then(() => {
    //executa a funcao createwindow para criar a janela principal
  createWindow()
})