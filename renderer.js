// const Realm = require("realm")

var input = document.getElementById("myFile");
var output = document.getElementById("output");

input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });
    
    reader.readAsBinaryString(myFile);
  }
});
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

// async function run() {
//   const DogSchema = {
//     name: 'Dog',
//     properties: {
//       _id: 'int',
//       name: 'string',
//       age: 'int',
//     },
//     primaryKey: '_id',
//   };

//   const config = {
//     path: 'my.realm',
//     schema: [DogSchema],
//     /* 
//        enable sync history, using "sync:true" (this allows changes to "my.realm" file
//        to be synced by the realm opened in the main process)
//     */
//     sync: true, 
//   };


//   const realm = new Realm(config);

//   const dogs = realm.objects('Dog');
//   console.log(`Renderer: Number of Dog objects: ${dogs.length}`);

//   realm.write(() => {
//     realm.create('Dog', {
//       _id: 1,
//       name: 'Spot',
//       age: 2,
//     });
//   });
// }
// run().catch((err) => {
//   console.error('Failed to open realm:', err);
// });

// function populateSelect() {
//   // THE JSON ARRAY.
//   // var birds = [
//   //     {"ID": "001", "Bird_Name": "Eurasian Collared-Dove"},
//   //     {"ID": "002", "Bird_Name": "Bald Eagle"},
//   //     {"ID": "003", "Bird_Name": "Cooper's Hawk"},
//   // ];

//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb+srv://ndm_75:nadeem123@cluster0.p64ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bla");
//     var myobj = [
// //     { name: 'John', address: 'Highway 71'},
// //     { name: 'Peter', address: 'Lowstreet 4'},
// //     { name: 'Amy', address: 'Apple st 652'},
// //     { name: 'Hannah', address: 'Mountain 21'},
//        {_id: "001", Bird_Name: "Eurasian Collared-Dove"},
//        {_id: "002", Bird_Name: "Bald Eagle"},
//        {_id: "003", Bird_Name: "Cooper's Hawk"},
//     ];
//     dbo.collection("birds").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });

//   const databasename = "GFG"; // Database name

//   MongoClient.connect(url).then((client) => {

//   const connect = client.db(databasename);
//   // Connect to collection
//   const collection = connect.collection("GFGcollections");

  
//   collection.find({}).toArray().then((birds) => {
//     var ele = document.getElementById('sel');
//     for (var i = 0; i < birds.length; i++) {
//         // POPULATE SELECT ELEMENT WITH JSON.
//         ele.innerHTML = ele.innerHTML +
//             '<option value="' + birds[i][_id] + '">' + birds[i][Bird_Name] + '</option>';
//     }
//   });
// }).catch((err) => {

//   // Printing the error message
//   console.log(err.Message);
// })

// }


// function show(ele) {
//   // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
//   var msg = document.getElementById('msg');
//   msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
//       'ID: <b>' + ele.value + '</b>';
// }
