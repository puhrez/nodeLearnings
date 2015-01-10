var http = require("http"),
  url = require("url"),
  trace = require("jstrace");

require("stackup");

var server = http.createServer(function (req, res) {
  var reqURL = url.parse(req.url, true),
    sC,
    body;
  trace("request:start", {"url": reqURL.pathname});
  if (reqURL.pathname === "/prognosis" && req.method === "GET") {
    sC = 200;
    body = {"ok": true};
  } else {
    sC = 404;
    body = {"error": "notfound"};
  }
  res.writeHead(sC);
  res.end(JSON.stringify(body));
  trace("request:end", {"statusCode": sC, "body" : body});
});
server.listen(process.argv[2] || 9999, function () {
  console.error("up");
});