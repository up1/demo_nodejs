var http = require('http');

var server = http.createServer( function(req, res) {
	res.writeHead(200);
	req.on('data', function(data) {
		res.write(data);
	});

	req.on('end', function(){
		res.end();
	});
});

server.listen(1337);
console.log('Server started...');