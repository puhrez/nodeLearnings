var http = require('http'),
    map = require('through2-map');

var server = http.createServer(function (req, res) {
    if (req.method !== "POST") {
   	res.end("send me a post \n"); 
    }
    res.writeHead(200, {'Content-Type':'text/plain'});
    req.pipe(map(function (chunk) {
	return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(Number(process.argv[2]));
