// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb');

  // db.collection('Todos').findOneAndUpdate({

  //   _id:new ObjectID("5ad308396233ff2b2a8c8065")
  // }, {

  //   $set:{
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  
  // }).then((result)=>{
  //   console.log(result);
  // });


    db.collection('Users').findOneAndUpdate({

    _id:new ObjectID("5ad2fc25953e5323ec0547b0")
  }, {

    $set:{
      name: 'Venu'
    },
    $inc: {
      age : 1
    }
  },{
    returnOriginal: false
  
  }).then((result)=>{
    console.log(result);
  });

  //
});
