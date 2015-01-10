var hapi = require("hapi"),
  server = hapi.createServer("localhost", Number(process.argv[2] || 8080)),
  path = require("path");

server.route({
  path: "/foo/bar/baz/{file}",
  method: "GET",
  handler: {
    directory: {path: path.join(__dirname + './public') }
  }
});

server.start();