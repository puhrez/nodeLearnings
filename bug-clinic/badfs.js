var readFile = require("fs").readFile;
require("stackup");
var domain = require("domain");

function scenario(jsonPath, cb) {
  var d = domain.create();

  d.on("error", cb);

  d.run(function () {
    readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
      cb(error, JSON.parse(contents));
    });
  });
}


module.exports = scenario;
