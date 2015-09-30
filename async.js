
var fs = require('fs');

function llamame(err,data){
	console.log(data);
}
var data = fs.readdir('./',llamame);

console.log("fin");

