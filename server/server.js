var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {

	var todo=new Todo({

		text: req.body.text

	});
	console.log(req.body);

	todo.save().then((doc)=>{
		res.send(doc);

	},(e)=>{

		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {

	Todo.find().then((todos) => {
		res.send({
			todos,
		});
	}, (e) => {
		res.status(400).send(e);
	})

});

//GET /todos/1234324

app.get('/todos/:id',(req,res) => {

	var id = req.params.id;
	//Valid id  using  isValid
	//404 - send back empty send
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	},(e)=>console.log(e)).catch((e)=>{
		res.status(400).send();
	})

	//findByID//success//error//400-send empty body back
	
});

app.listen(3000, () => {

	console.log('Started on port 3000');
});


module.exports = {app};
// // var Todo = mongoose.model('Todo',{
// // 	text:{

// // 		type: String
// // 	},
// // 	completed:{

// // 		type: Boolean
// // 	},
// // 	completedAt: {

// // 		type: Number
// // 	}
// // });


// // var Todo = mongoose.model('Todo',{
// // 	text:{

// // 		type: String,
// // 		required: true,
// // 		minlength: 1,
// // 		trim: true
// // 	},
// // 	completed:{

// // 		type: Boolean,
// // 		default: false
// // 	},
// // 	completedAt: {

// // 		type: Number,
// // 		default: null
// // 	}
// // });
// // var newTodo = new Todo({

// // 	text: 'Cook dinner'
// // });

// // newTodo.save().then((doc)=>{

// // 	console.log("save todo ",doc);

// // },(e) => {
// // 	console.log("Unable to save todo");
// // });


// // var otherTodo=new Todo({

// // 	text: 'Feed the cat',
// // 	completed: true,
// // 	completedAt: 123
// // });

// // var otherTodo=new Todo({

// // 	text: ' Edit this Video  '
// // });

// // otherTodo.save().then((doc)=> {
// // 	console.log(JSON.stringify(doc, undefined, 2));
// // },(e)=>{
// // 	console.log("Unable to save", e);
// // });


// // var User=mongoose.model('User', {
// // 	email:{

// // 		type: String,
// // 		require: true,
// // 		trim: true,
// // 		minlength: 1
// // 	}
// // });

// var user =new User({
// 	email: ' gk6070@gmail.com '
// });

// user.save().then((doc)=>{

// 	console.log("User saved", doc);
// },(e)=>{

// 	console.log("Unable to save user", e);
// });