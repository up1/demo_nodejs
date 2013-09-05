var mysql = require('mysql');
var connection = mysql.createConnection(
    {   host: 'localhost', 
        user: 'root',  
        password: '42112121', 
        database: 'demo_nodejs'
    });

exports.all = function(req, res){
    if (connection) {
        connection.query('select * from person order by name', function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};

exports.one = function(req, res){
    var id = req.params.id;
    if (connection) {
        var queryString = 'select * from person where id = ?';
        connection.query(queryString, [id], function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};

exports.insert = function(req, res){
    if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('gender')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    if (connection) {
        var queryString = 'INSERT INTO PERSON (name, gender) VALUES(?, ?)';
        connection.query(queryString, [req.body.name, req.body.gender], function(err, rows, fields) {
            if (err) throw err;
            res.json(true);
        });
    }
};