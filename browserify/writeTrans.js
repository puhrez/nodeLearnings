var through = require("through2"),
  fs = require("fs"),
  quote = require("quote-stream"),
  combine = require("stream-combiner2"),
  split = require("split");
var sprintf = require("sprintf-js").sprintf;

module.exports = function (file) {
  if (!(/.txt$/.test(file))) {
    return through();
  } else {
    return combine(
      fs.createReadStream(file),
      split(),
      through(function (chunk, enc, cb) {
        var lines = 0;
        var str = chunk.toString();

        if (lines % 5 === 0) {
          this.push(sprintf("%3d %s", str));
        } else {
          this.push(sprintf("    %s", str));
        }

        lines += 1;
        cb();
      }),
      quote()
    );
  }
};