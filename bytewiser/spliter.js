var fs = require('fs'),
    stream = fs.createReadStream(process.argv[2]);

stream.on("data", function (data) {
    var buffer = new Buffer(data),
        lastSlice = 0;
    for (var i = 0; i < buffer.length; i += 1) {
        if (buffer[i] === 0x0a) {   
            console.log(buffer.slice(lastSlice, i));
	    lastSlice = i+1;
        }
    }
    console.log(buffer.slice(lastSlice, i));
});
