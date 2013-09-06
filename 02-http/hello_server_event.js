var http = require('http');

var server = http.createServer();

server.on('request', function(req, res){
	res.write('Got request\n');
	res.end();
});

server.on('connection', function(){
	console.log('Connection');
});

server.on('close', function(){
	console.log('Close');
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');