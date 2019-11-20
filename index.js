const {app, BrowserWindow} = require('electron')
const path = require('path')
const {writeFileSync} = require('fs')
const {join} = require('path')

if(typeof app === "undefined")
  console.error("electron.app import is broken, its undefined")


function orderObject(unordered){
  const ordered = {};
  Object.keys(unordered).sort().forEach(function(key) {ordered[key] = unordered[key];});
  return ordered
}
writeFileSync(join(__dirname, "envDump"), JSON.stringify(orderObject(process.env), null, 1))


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')
}

app.on('ready', createWindow)


app.on('activate', function () {
  createWindow()
})