"use strict";
const 
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];
try {
    fs.watch(filename, list);
}
catch (err) {
    throw Error("ERROR: " + err.message + '\n');
}
if (!filename) {
    throw Error("A file to watch must be specified!");
}


function list () {
    let 
	ls = spawn(process.argv[3], [process.argv[4], filename]),
	output = '';
    ls.stdout.on('data', function (chunk) {
	output += chunk.toString();
    });
    ls.on('error', function(err) {
        process.stderr.write("ERROR: " + err.message + '\n');
    });
    ls.on('close', function () {
	let parts = output.split(/\s+/);
	if (!parts[0]) {
	    throw Error("The file has been deleted");
	}
	console.dir([parts[0], parts[4], parts[8]]);
    });
};


console.log("Now watching" + filename + "for changes");
