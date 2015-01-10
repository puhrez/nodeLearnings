var duplex = require("duplexer"),
    through = require("through");

module.exports = function (counter) {
    var countries = {},
	writeable = through(write,end);

    return duplex(writeable, counter);

    function write (row) {
	countries[row.country] = (countries[row.country] || 0) + 1;
    }
    function end () {
	counter.setCounts(countries);
    }
}
