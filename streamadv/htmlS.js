var trumpet = require("trumpet"),
    through = require("through"),
    tr = trumpet();
function write (buf) {
    this.queue(buf.toString().toUpperCase());
}
process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();

stream.pipe(through(write)).pipe(stream);

tr.pipe(process.stdout);



