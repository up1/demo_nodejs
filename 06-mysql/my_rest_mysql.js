var express = require('express');
var service_person = require('./service_person')
var app = express();
app.use(express.bodyParser());

app.get('/', service_person.all);
app.get('/person/:id', service_person.one);
app.post('/person', service_person.insert);

app.listen(process.env.PORT || 1337);
console.log('Listening on port 1337');