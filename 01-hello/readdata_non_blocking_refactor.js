var fs = require("fs");

var callback = function(err, data) {
	console.log(data);
}

fs.readFile("test.txt", callback);
fs.readFile("test2.txt", callback);

console.log("Do other tasks");