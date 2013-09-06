var fs = require('fs');

var http = require('http');

http.createServer(function(req, res) {
	var newFile = fs.createWriteStream("uploaded.txt");
	req.pipe(newFile);

	req.on('end', function() {
		res.end('uploaded!');
	});
}).listen(1337);

console.log('Server running at http://localhost:1337');