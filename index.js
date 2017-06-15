const {Menu} = require('electron');
const electron = require('electron');

var template =  [
  {
    label: 'Edición',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'Vista',
    submenu: [
      {
        label: 'Recargar',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Herramientas de desarrollo',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  }
]

// Edit menu.
template[1].submenu.push(
  {
    type: 'separator'
  },
  {
    label: 'Speech',
    submenu: [
      {
        role: 'startspeaking'
      },
      {
        role: 'stopspeaking'
      }
    ]
  }
)

const {app,BrowserWindow,globalShortcut} = electron;

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
let mainWindow;

app.on('ready',() =>{
  var electronScreen = electron.screen, size = electronScreen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: size.width,
    heigth: size.heigth,
    minWidth: 800,
    minHeigth: 640
  });

  mainWindow.setTitle('ElectroWhatsapp');
  mainWindow.loadURL('https://web.whatsapp.com/');

  mainWindow.on('closed',()=>{
    mainWindow= null;
  });

});
