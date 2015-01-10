var http = require('http'),
    url = require('url');

function parseTime (reqDate) {
    return {
            hour: reqDate.getHours(),
            minute: reqDate.getMinutes(),
            second: reqDate.getSeconds()
        }
}
function parseUnix (reqDate) {
    return {
	unixtime: reqDate.getTime()
    }
}
var server = http.createServer(function (req, res) {
    var reqURL  = url.parse(req.url, true);
    var reqDate = new Date(reqURL.query.iso);
    var result;    
    if (reqURL.pathname === '/api/parsetime') {
	result = parseTime(reqDate);
    } 
    else if (reqURL.pathname === '/api/unixtime') {
	result = parseUnix(reqDate);
    }

    if (result) {
	res.writeHead(200,{"Content-Type":"application/json"});
	res.end(JSON.stringify(result));
    }
    else {
	res.writeHead(404);
	res.end("Sorry error");
    }
    res.end();
});
server.listen(process.argv[2]);
