const request = require('request');
const fs = require('fs');
const keys = require("./keys.js");
var norisArray = [];
var inputCommand = process.argv[2];
var commandParam = process.argv[3];




var norisKey = keys.norisKeys;
var yomamaKey = keys.yomama;

var client = new noris({
	norris:'http://api.icndb.com/jokes/random'
});

s
function processCommands(command, commandParam){

	
	switch(command){

	case 'noris':
		getnoris(); break;
     
	case 'yomama':
		if(commandParam === undefined){
			commandParam = defaultMovie;
		}    
		yomamathis(commandParam); break;
	case 'do-what-it-says':
		doWhatItSays(); break;
	default: 
		console.log("Invalid command. Please type any of the following commnds: my-tweets spotify-this-song movie-this or do-what-it-says");
}


}





function yomamathis(joke){

	console.log(joke);

	request('http://api.yomomma.info', function(error, response, body) {

  
  	if (!error && response.statusCode === 200) {

	    
	    
	  
	    var jokeID =  JSON.parse(body).results[0].id;
	   
	   
	    var queryURL = 'http://api.yomomma.info';

	    request(queryURL, function(error, response, body) {
			var yomamajokeoftheday = JSON.parse(body);
			console.log(yomamajokeoftheday);
	    	
	    });


  	}else{
  		console.log(error);
  	}

	});
}

function doWhatItSays(){
	fs.readFile('random.txt', 'utf8', function(err, data){

		if (err){ 
			return console.log(err);
		}

		var dataArr = data.split(',');

		processCommands(dataArr[0], dataArr[1]);
	});
}


processCommands(inputCommand, commandParam);