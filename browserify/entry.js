var parse = require("./ndjson").parse,
  stringify = require("./ndjson").stringify,
  str1 = prompt(),
  str2 = prompt();

console.log(parse(str1));
console.log(stringify(str2));