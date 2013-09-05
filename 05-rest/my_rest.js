var express = require('express');
var app = express();

var persons = [
  { name : 'Somkiat', gender : "male"},
  { name : 'Roofimon', gender : "female"},
  { name : 'Warangkana', gender : "female"},
  { name : 'Thawatchai', gender : "male"}
];

app.get('/', function (req, res) {
  res.json(persons);
});

app.get('/person/random', function (req, res) {
  var id = Math.floor(Math.random() * persons.length);
  var q = persons[id];
  res.json(q);
});

app.get('/person/:id', function(req, res){
  if(persons.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: Person not found');
  }

  var q = persons[req.params.id];
  res.json(q);
});


app.listen(process.env.PORT || 1337);
console.log('Listening on port 1337');