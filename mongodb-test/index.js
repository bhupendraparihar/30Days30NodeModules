// Retrieve
var MongoClient = require('mongodb').MongoClient;

//Connect to the db
MongoClient.connect("mongodb://localhost:27017/mycustomers", function(err, database){
    console.log('Running');
    if(err){
        console.log("some error while connection");
    }else{

        const collectionDB = database.db('mycustomers');
        let collection = collectionDB.collection('customers');
        
        let recordsToInsert = [{
            first_name : "Indresh",
            last_name: "Tripathi"
        },{
            first_name : "Shayane",
            last_name: "Umar"
            }
        ];

        collection.insert(recordsToInsert, {w:1}, function(err, result){
            console.log(result);
        });

        collection.find().toArray(function(err, items){
            console.log(items);
        });
    }
});