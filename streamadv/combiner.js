var 
    split = require('split'),
    through = require('through'),
    combine = require('stream-combiner'),
    gzip = require('zlib').createGzip();
module.exports = function () {
    var books = {},
	current;
    return combine(
	split(),
	through (write,end),
	gzip
    )
    
    function write (line) {
	if (line.length === 0) return;
	var row = JSON.parse(line);

	if (row.type === "genre") {
	    if (current) {
	    	this.queue(JSON.stringify(current) + '\n');
	    }
	    current = { "name" : row.name, "books" : [] };
	}
	else if (row.type === "book") {
	    current.books.push(row.name);
	}
    }
    function end () {
	if (current) {
	    this.queue(JSON.stringify(current) + '\n');
	}
	this.queue(null);
    }
}
