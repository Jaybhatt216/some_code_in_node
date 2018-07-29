let express = require('express');//import express
let bod_Parser = require('body-parser');//import bpody parser
let path = require('path');// import path needed
let mangojs= require('mongojs');
let db = mongojs('customerapp', ['users']);
//also going add in nodemon so I dont have to restart server all the time

let cmapp = express(); //assign the main file to express

//middleware order matters put it before the rout handler never before
/*let logger = function(req,res,next){ //middleware function that takes request,respond,next
console.log('logging');
next(); //next function
}
//logger will not run until the code cmapp.use is used
cmapp.use(logger); */

//view engine(ejs imstall)
cmapp.set('view engine', 'ejs');
//specify the folder
cmapp.set('views', path.join(__dirname, 'views'));



//the 2 below writes a documentation for body parser 
cmapp.use(bod_Parser.json());
cmapp.use(bod_Parser.urlencoded({extended: false}));

//set static folder
cmapp.use(express.static(path.join(__dirname, 'public') ))
//parse some json
let users = [
    {
    	id: 1,
    	first_name: 'John', 
    	last_name: 'Doe',
    	email: 'JD@gmail.com',

    },
       {
    	id: 2,
    	first_name: 'Bob', 
    	last_name: 'Smith',
    	email: 'BS@gmail.com',

    },
       {
    	id: 3,
    	first_name: 'Jill', 
    	last_name: 'Jackson',
    	email: 'JJ@gmail.com',

    }

]

cmapp.get('/', function(req,res){ //request and responf function
	// find everything
db.users.find(function (err, docs) {
	console.log(docs);

	res.render('index', {
		title:'customers'
		 users: users 
    // docs is an array of all the documents in mycollection
})
 
	 //when someone loads webpage respond with hello world
});//for vjs use res.render not send and the vjs file
/*cmapp.get('/', function(req,res){ //request and responf function
	res.json(person); //when someone loads webpage respond with hello world
});*/
});

cmapp.post('/users/add', function(req,res){
	console.log('FORM SUBMITTED')
});

cmapp.listen(3000, function(){//make a server on port 3000 to host things
	console.log('server started on port 3000...');

});