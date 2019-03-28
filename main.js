const {app, BrowserWindow, Menu} = require('electron');
const remote = require('electron').remote;

const template = [
    {
        label: "File",
        submenu: [
            {
                label: "Reload",
                accelerator: "CmdOrCtrl+R",
                click() {
                    mainWindow.loadURL(`file://${__dirname}/desktop.html`)
                }
            },
            {
              label: "Hard Reload",
              accelerator: "CmdOrCtrl+Shift+R",
              click() {
                remote.app.relaunch();
                remote.app.exit(0);
              }
            },
            {
                label: "DT",
                accelerator: "CmdOrCtrl+Shift+I",
                click() {
                    mainWindow.webContents.openDevTools()
                }
            },
            {
              label: "CAMERA",
              accelerator: "CmdOrCtrl+Shift+C",
              click() {
                mainWindow.loadURL(`file://${__dirname}/cam.html`)
              }
            },
            {
              label: "TEsst",
              accelerator: "CmdOrCtrl+Shift+Alt+C",
              click() {
                mainWindow.loadURL(`file://${__dirname}/developer/index.html`);
              }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow () {
	
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false, webPreferences: { experimentalFeatures: true } })
  mainWindow.setFullScreen(true);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/desktop.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (mainWindow === null) {
    createWindow();
  }
})

