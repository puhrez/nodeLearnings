var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (request, response) {
    responce.writeHead(200, {'content-type':'text/plain'});
    var srcFile = fs.createReadStream(process.argv[3]);
    srcFile.pipe(response);
});
server.listen(process.argv[2]);
