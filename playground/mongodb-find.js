// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

var obj=new ObjectID();
console.log(obj);

// var user={name: 'gopal',age:25};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb');

  // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{

  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // });

  //   db.collection('Todos').find({
    
  //     _id: new ObjectID('59d3d6e4ee826035a8ce5a87')

  //   }).toArray().then((docs)=>{

  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // });



  //   db.collection('Todos').find().count().then((count)=>{

  //   console.log(`Todos count: ${count}`);
    
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({name : 'gopal'}).toArray().then((docs)=> {

    console.log(JSON.stringify(docs, undefined,2));
    
  });
  // db.close();
});
