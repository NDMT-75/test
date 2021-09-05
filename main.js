const {app, BrowserWindow, Menu} = require('electron')

process.env.NODE_ENV='development'

const isDev = process.env.NODE_ENV !=='production'? true : false
const isWin =process.platform == 'win32' ? true:false


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ndm_75:nadeem123@cluster0.p64ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("rules");
//   var myobj = [
//     { ruleName: "No universals", ruleKeywords: "all,always,any,every,never,no,none,nothing,often,usually"},
//     { ruleName: "Proper universals", ruleKeywords: "all,always,any,every,never,no,none,nothing,often,usually"},
//     { ruleName: "No ronouns", ruleKeywords: "if,this,that,he,she,they,them"}
//   ];
//   collection.insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("No of documents inserted: " + res.insertedCount);
//     // perform actions on the collection object
//     client.close();
//   });
//   // collection.findOne({}, function(err, res) {
//   //   if (err) throw err;
//   //   console.log(res.name);
//   //   client.close();
//   // });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url =  "mongodb+srv://ndm_75:nadeem123@cluster0.p64ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myobj = [
//     { ruleName: "No universals", ruleKeywords: "all,always,any,every,never,no,none,nothing,often,usually"},
//     { ruleName: "Proper universals", ruleKeywords: "all,always,any,every,never,no,none,nothing,often,usually"},
//     { ruleName: "No pronouns", ruleKeywords: "if,this,that,he,she,they,them"}
//   ];
//   dbo.collection("rules").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://ndm_75:nadeem123@cluster0.p64ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var query = { ruleName: /^No/ };
//   dbo.collection("rules").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://ndm_75:nadeem123@cluster0.p64ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("node_test");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("clicks").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow



let mainMenu = new Menu.buildFromTemplate([
  {
  label: 'File', 
  submenu: [
    {label: 'New'},
    {label: 'Open'},
    {label: 'Save As', submenu:[{label:'PNG'},{label:'DOC'},{label:'xsls'},{label:'PDF'}]},
    {label: 'Clear File'},
    {label: 'Export As',submenu:[{label:'HTML'}]},
    {label: 'Settings'},
    {
      label: 'Quit',
      accelerator: 'Ctrl+Q',
      click:()=> app.quit()
    },
  ]
},
{
  label: 'View', 
  submenu: [
    {label: 'Recent Files'},
    {label: 'Preview'},
    {label: 'Old Reports'},
  ]
},
{
  label: 'Checkers', 
  submenu: [
    {label: 'Default Checkers'},
    {label: 'Specific Checkers'},
    {label: 'Add/delete Keywords'},
  ]
},
{
  label: 'help'
},
{
  label: 'About'
},
{
  label: 'Domain Ontology',
  submenu: [
    {label: 'ADAS Domain Ontology'},
    {label: 'Power Train Domain Ontology'},
    {label: 'Design Domain Ontology'},
  ]
},
{
  label: 'Search..',
},
])



// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true
    }
  })

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile('index.html')

  // Open DevTools - Remove for PRODUCTION!
 //mainWindow.webContents.openDevTools();

  Menu.setApplicationMenu(mainMenu)

  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

// Electron `app` is ready
app.on('ready', createWindow)

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
