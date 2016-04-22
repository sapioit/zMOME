 var app = require('app');
 var BrowserWindow = require('browser-window');
 require('crash-reporter').start();

 var mainWindow = null;

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
   app.quit();
 });

app.setPath("userData", __dirname + "/zMOME");

 app.on('ready', function() {
  mainWindow = new BrowserWindow({
   width: 1200,
   height: 860,
   resizable: true,
   title: "zMOME",
   icon: "/zMOME.icns",
   icon: "/zMOME.ico",
   icon: "/zMOME.png"
  });
  mainWindow.setOverlayIcon(
   __dirname + "/zMOME.png",
   "Test?");
  mainWindow.setTitle("zMOME");
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
   mainWindow = null;
  });
  //mainWindow.toggleDevTools();
 });
