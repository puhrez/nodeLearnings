var http = require("http"),
    through = require("through");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type":"text/plain"});
    if (req.method === "POST") {
	req.pipe(through(write,end)).pipe(res);
    } else {
	res.end("Send me a POST");
    }
});

function write (buff) {
    this.queue(buff.toString().toUpperCase());
};
function end () {
    this.queue(null);
};
server.listen(process.argv[2]);
