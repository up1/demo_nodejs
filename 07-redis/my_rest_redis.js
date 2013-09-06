var express = require('express');
var service_person = require('./service_person_refactor')
var app = express();
app.configure(function(){
    app.set('port', process.env.PORT || 1337);
    app.use(express.bodyParser());
});

app.get('/', service_person.all);
app.get('/person/:id', service_person.one);
app.post('/person', service_person.insert);

app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));