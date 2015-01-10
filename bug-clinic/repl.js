module.exports = scenario;
var replify = require("replify");
var replpad = require("replpad");

function scenario(callback) {
  var createServer = require("http").createServer;

  var server = createServer(function (res, req) {
    res.end("Hello World");
  });
  var repl = replify({name: "bug-clinic", start: replpad}, {__message: "REPLs are neat"});// do replify stuff here

  server.listen(8080, function () {
    console.error("up");
  });
  callback(server, repl);
}

