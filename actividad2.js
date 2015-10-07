var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	var index = fs.readFileSync('public'+req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(index, "binary");
	res.end();
}).listen(80, "127.0.0.1");
console.log('Server running at http://127.0.0.1:80/');
	
