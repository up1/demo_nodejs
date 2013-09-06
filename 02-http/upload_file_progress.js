var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
	var newFile = fs.createWriteStream("uploaded.txt");
	var fileByte = req.headers['content-length'];
	var uploadedByte = 0;

	req.pipe(newFile);

	req.on('data', function(data){
		uploadedByte += data.length;
		var progress = (uploadedByte/fileByte) * 100;
		res.write("Progress=" + progress + "%\n");
	});

	req.on('end', function() {
		res.end('uploaded!');
	});
}).listen(1337);

console.log('Server running at http://localhost:1337');