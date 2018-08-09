const express = require('express');
const io = require('socket.io')(serv, {});
const socket_list = {};
const app = express();
const serv = require('http').Server(app);
app.get('/', function(req,res){
	res.sendFile(_dirname + '/client/index.html');
});
app.use('/client',express.static(_dirname+ '/client'));

serv.listen(2000);
console.log('server started');
io.socket.on('connection',function(socket){
	socket.id =math.random();
	socket.x =0;
	socket.y=0;
	socket_list[socket.id] =socket;
	console.log('socket connection');
	socket.on('connected',function(data){
		console.log('connected');
	});
});


/*setInterval(function()){
	for(var i in socket_list){
		var socket= socket_list[i];
		socket.x++;
		socket.y++;
		socket.emit('newPosition',{
			x:socket.x,
			y:socket.y
		});
	}

}*/