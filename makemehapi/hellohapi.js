var hapi = require("hapi"),
  server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: "/{name}",
  method: "GET",
  handler: function (req, reply) {
    reply("Hello " + req.params.name);
  }
})

server.start()