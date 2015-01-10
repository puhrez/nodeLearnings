var through = require('through'),
    split = require('split'),
    count = 1;

process.stdin
    .pipe(split())
    .pipe(through(function (buf) {
	line = buf.toString();
	this.queue(count % 2 === 0 
	? line.toUpperCase() + '\n' 
	: line.toLowerCase() + '\n'
	);
	count += 1;
    }))
    .pipe(process.stdout);
