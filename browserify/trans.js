var fs = require("fs");
var src = fs.readFileSync("./wake.txt", "utf8").split("\n");
var sprintf = require("sprintf-js").sprintf;
var lines = 0;

for (var line in src) {
  if (lines % 5 === 0) {
    console.log(sprintf("%3d %s", lines, src[line]));
  } else {
    console.log(sprintf("    %s", src[line]));
  }
  lines += 1;
}
