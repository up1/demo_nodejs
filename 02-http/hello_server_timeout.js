var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Step 1 :: Got request");

  setTimeout(function() {
  	res.write("Step 2 :: Success")
  	res.end();
  }, 5000);
  
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');