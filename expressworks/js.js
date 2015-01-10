var express = require("express"),
    fs = require('fs'),
    app = express(),
    fileName = process.argv[3];

app.get('/books', function (req, res) {
   fs.readFile(fileName, function (err, data) {
	if (err) throw err;
	res.json(JSON.parse(data));
   });
});
app.listen(process.argv[2])
