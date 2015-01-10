var http = require('http'),
    concat = require('concat-stream'),
    url = process.argv[2];

http.get(url, function (response) {
    response.pipe(concat(function (data) {
	data = data.toString();
	console.log(data.length);
	console.log(data);
    })
    );
});
