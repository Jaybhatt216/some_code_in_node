const express = require('express');
const routes = require('./routes/apiroutes.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/freelancer')

app.use(bodyParser.json());

// // initialize routes
// app.use('/apiroutes', require('./routes/apiroutes'));

// // listen for requests
// app.listen(process.env.port || 3000, function() {
//     console.log('now listening for requests');
// });




//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url = 'mongodb://heroku_q6qt0h5v:jli32up15ncl3gf5m8bf6cs481@ds223343.mlab.com:23343/heroku_q6qt0h5v';      
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});