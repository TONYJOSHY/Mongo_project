const {MongoClient, ObjectID} =require('mongodb');
//const {ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useUnifiedTopology: true },
 (err, client) => {
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected");
    const db = client.db("TodoApp");
    db.collection("Todo").count().then( (doc ,err)=> {
        if(err){
            console.log("error occured", err);
        }
        //console.log(JSON.stringify(doc, undefined , 2));
        console.log("Count of documents ", doc);
    } );
        
   // client.close();
}); 