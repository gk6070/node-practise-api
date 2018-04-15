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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   _id: 123,
  //   name: 'gopal',
  //   age: 25,
  //   location: 'India'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops);
  // });

  //   db.collection('Users').insertOne({
  //   name: 'gopal',
  //   age: 25,
  //   location: 'India'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
