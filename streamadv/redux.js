var duplexer = require("duplexer"),
    through = require("through");
module.exports = function (counter) {
    var countries = {},
	writeable = through(write, end);
    return duplexer(writeable, counter);

    function write (buf) {
	countries[buf.country] = (countries[buf.country] || 0) + 1;
    }
    function end () {
	counter.setCounts(countries);
    } 
}

