var hapi = require("hapi"),
  server = hapi.createServer('localhost', Number(process.argv[2] || 8080)),
  path = require("path");

server.route({
  path: "/",
  method: "GET",
  handler: {
    file: path.join(__dirname + "/index.html")
  }
});

server.start();