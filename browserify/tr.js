var through = require("through"),
  fs = require("fs"),
  quote = require("quote-stream"),
  combine = require("stream-combiner2"),
  split = require("split");
var sprintf = require("sprintf-js").sprintf;

module.exports = function transform(file) {
  var lines = 0;
  if (!(/.txt$/.test(file))) {
    return through();
  } else {
    combine(
      fs.createReadStream(file),
      //split(),
      through(function write(buf) {
        var line = buf.toString();
        this.queue(lines % 5 === 0
          ? sprintf("%3d %s", lines, line)
          : sprintf("    %s", line)
          );
        lines += 1;
      },
        function end() {
          console.log("END");
          this.queue(null);
        }),
      quote(),
      process.stdout
    );
  }
};

