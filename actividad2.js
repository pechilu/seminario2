var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index, "binary");
  res.end();
}).listen(80, "127.0.0.1");
console.log('Server running at http://127.0.0.1:80/');
	
