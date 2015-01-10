var 
    split = require('split'),
    through = require('through'),
    gzip = require('zlib').createGzip(),
    combine = require('stream-combiner');

module.exports = function () {
    var grouper = through(write, end),
	current;

    return combine(split(), grouper, gzip);

    function write (line) {
	if (line.length === 0) return;
	var row = JSON.parse(line);
	
	if (row.type === "genre") {
	    if (current) {
		this.queue(JSON.stringify(current) + '\n');
	    }
	    current = {name : row.name, books : [] };
	}
	else if (row.type === "book") {
	    current.books.push(row.name);
	}
    }
    function end() {
	if (current) {
	    this.queue(JSON.stringify(current) + '\n');
    	}
	this.queue(null);
    }
}
