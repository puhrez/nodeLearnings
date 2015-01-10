var http = require('http');
    urls =[process.argv[2], process.argv[3], process.argv[4]],
    concat = require("concat-stream"),
    results = {};
    count = urls.length;

urls.forEach(function (url) {
    http.get(url, function (response) {
  	response.pipe(concat(function (data) {
           results[url] = (data.toString());
	   count -=1;
	   if (count <= 0) {
		urls.forEach(function (url) {
		    console.log(results[url]);
		});
	   }
	}));
    });	
});


