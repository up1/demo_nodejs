var express = require('express');
var app = express();

var persons = [
  { name : 'Somkiat', gender : "male"},
  { name : 'Roofimon', gender : "female"},
  { name : 'Warangkana', gender : "female"},
  { name : 'Thawatchai', gender : "male"}
];

app.use(express.bodyParser());

app.post('/person', function(req, res) {
  //console.log(req);
  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('gender')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newPerson = {
    name : req.body.name,
    gender : req.body.gender
  };

  persons.push(newPerson);
  res.json(persons);
  //res.json(true);
});

app.delete('/person/:id', function(req, res) {
  if(persons.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: Person not found');
  }

  persons.splice(req.params.id, 1);
  res.json(persons);
  //res.json(true);
});


app.listen(process.env.PORT || 1337);
console.log('Listening on port 1337');