//this is the server also in express

//import express
const express = require('express');
//use it in the app variable
const app = express();
//create the server var to go over the internet and then create the server using express
const server = require('http').createServer(app);
//now for socket IO, import socket as it to listen for the server
const io = require('socket.io').listen(server);

// declare arrays for users and connections
users =[];
connections = [];

//run the server with a port 
server.listen(process.env.PORT || 3000);
console.log('server running...');
//create a route right now will be the home page
app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');


});

//start sockets an dpush to array
io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('connected: %s sockets connected', connections.length);
//disconnect the socket
socket.on('disconnect',function(data){
	//if(!socket.username) return;
	users.splice(users.indexOf(socket.username), 1);
	updateUsernames();
connections.splice(connections.indexOf(socket), 1);
console.log('Disconnected %s sockets connected', connections.length);	

});
//send message
socket.on('send message',function(data){
io.sockets.emit('new message',{msg: data});


});
// new user
socket.on('new user', function(data, callback){
	callback(true);
	socket.username = data;
	users.push(socket.username);
	updateUsernames();
});

function updateUsernames(){
	io.sockets.emit('get users', users);
};

});
