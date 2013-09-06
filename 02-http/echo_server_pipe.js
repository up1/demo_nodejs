var http = require('http');

var server = http.createServer( function(req, res) {
	res.writeHead(200);
	req.pipe(res);
});

server.listen(1337);
console.log('Server started...');