var fs = require("fs");
var data = fs.readFileSync("test.txt");
console.log(data);
console.log("Do other tasks");