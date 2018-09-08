function print(value){  //this function makes things print instead of console.log
     console.log(value);
  }//=> is the same as function()

const express = require('express'); //import express
const path = require('path'); //import path it is there by default no need to download
const mongoose = require('mongoose');//import mongoose
mongoose.connect('mongodb://localhost/nodekb');//use mongoose with mongodb
let db = mongoose.connection;

//check connection
db.once('open', function(){
print('connected to mongodb');

})

//check data base for error
db.on('error',function(){
  print(err);
});

//initalize app
const app = express();//assign express to this doc name

//bring in models Article_Schema
let article = require('./models/Article');

//load view engine (pug)
app.set('views', path.join(__dirname, 'views'));//this stores the views that we use and combines with the path of the localization path.join(); will do this and __dirname is directory name
app.set('view engine','pug');

//route to home
app.get('/', function(req,res){
  article.find({}, function(err, Articles){
    if(err){
      print(err);
    }else {
      res.render('index', {
        title: 'Articles',
        Articles: Articles
      });
    }

  });

});//get  request and send one via web server
//res.send will be replaced with res.render because we will use pug, res.send is default unles susing something else for now its render
//we are rendering the index file we made in views, that is why we use render not the default

//make another route

app.get('/Articles/add',function(req,res){
  res.render('add_articles', {
      title:'Add Articles'

  });
});



//start server
app.listen(3000, function(){print('server started oon port 3000');

});//use port 3000 for this web server
//server.close();
