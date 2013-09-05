var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello, world!');
});

app.get('/:name', function(req, res){
  var name = req.params.name; 
  res.send('Hello, ' + name);
});


app.listen(1337);
console.log('Listening on port 1337');