var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
		try{
			if (req.url==null || req.url=='' || req.url=='/' || req.url=='/favicon.ico'){ //Algunos navegadores piden el favicon.ico
				index = fs.readFileSync('public/index.html');
			}else{
				index = fs.readFileSync('public'+req.url);
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(index, "binary");
			res.end();
		}catch(e){
			if (e.code === 'ENOENT') {
			  //var index = fs.readFileSync('public/index.html');
				res.writeHead(404, {'Content-Type': 'text/plain'});
				//res.write(index, "binary");
				res.end("ERROR 404");
			} else {
			  //var index = fs.readFileSync('public/index.html');
				res.writeHead(500, {'Content-Type': 'text/plain'});
				//res.write(index, "binary");
				res.end("ERROR 500");
			}
		}
}).listen(80, "127.0.0.1");
console.log('Server running at http://127.0.0.1:80/');
	
