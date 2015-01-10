var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8',  function callback (err, data) {
    if (err) {
	console.log("Error!");
    }
    else {
	var lines = data.split("\n").length - 1;
    	console.log(lines);
    }
});
