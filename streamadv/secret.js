var
    zlib = require("zlib"),
    crypto = require("crypto"),
    parser = require("tar").Parse(),
    through = require('through'),
    input = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on("entry", function (entry) {
    if (entry.type !== 'File') return;

	var output = crypto.createHash('md5', {encoding: 'hex'});
	event.pipe(output).pipe(through(null,end)).pipe(process.stdout);
	
	function end () {this.queue(' ' + event.path + '\n')}
});

process.stdin
    .pipe(input)
    .pipe(zlib.createGunzip())
    .pipe(parser);
