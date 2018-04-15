// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb');

  //deleteMany
  // db.collection('Todos').deleteMany({text : 'testdelete'}).then((result) =>{

  //   console.log(result);
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({text : 'testdelete'}).then((result) => {

  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {

  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'venu'});

  db.collection('Users').findOneAndDelete({

    _id:new ObjectID("5ad2fbfb74357430b47ed563")

  }).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
  });

  //
});
