var fs = require("fs");
var data = fs.readFileSync("test.txt");
console.log(data);
var data = fs.readFileSync("test2.txt");
console.log(data);
console.log("Do other tasks");