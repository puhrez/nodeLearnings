var url = require("url"),
  querystring = require("querystring"),
  addr = prompt(),
  addr = url.parse(addr),
  path = querystring.parse(addr.query).file;

console.log(url.resolve(addr, path));