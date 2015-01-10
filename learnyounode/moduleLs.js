var ls = require('./ls.js'),
    dir = process.argv[2],    	
    ext = process.argv[3];

ls(dir, ext, function (err, data) {
    if (err) {
	return console.error("Error", err);
    } else {
	for (var i = 0; i < data.length; i += 1) {
            console.log(data[i]); 
	}
    }
});
