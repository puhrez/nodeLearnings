var options = {
  views: {
    path: "templates",
    engines: {
      html: require("handlebars")
    },
    helpersPath: "helpers"
  }
};
var hapi = require("hapi"),
  server = hapi.createServer("localhost", Number(process.argv[2] || 8080), options);

server.route({
  path: "/",
  method: "GET",
  handler: {
    view: "index.html"
  }
});

server.start();