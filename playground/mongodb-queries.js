const {ObjectID} = require('mongodb');
 
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

User.findById('5ad38b785c5c33e425693453').then((user)=>{
	if(!user){
		console.log('Unable to find user');
	}

	console.log(JSON.stringify(user,undefined,2));
}, (e) =>{
	console.log(e);
});

// var id= '5ad41bf94b6c8cb8291a936811';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }
// // Todo.find({
// // 	_id: id
// // }).then((todos) => {
// // 	console.log('Todos', todos);
// // });

// // Todo.findOne({
// // 	_id: id
// // }).then((todo) => {
// // 	console.log('Todos', todo);
// // });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// http://mongoosejs.com/docs/queries.html