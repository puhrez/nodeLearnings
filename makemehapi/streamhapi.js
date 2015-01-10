var hapi = require("hapi"),
  Crpt = require("./simple-rot13-stream.js"),
  server = hapi.createServer("localhost", Number(process.argv[2] || 8080)),
  fs = require("fs"),
  rot13 = new Crpt()

server.route({
  path: "/",
  method: "GET",
  handler: function (res, reply) {
    reply(fs.createReadStream("./file.txt").pipe(rot13));
  }
});

server.start();