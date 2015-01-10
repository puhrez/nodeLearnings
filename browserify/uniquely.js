var uniq = require("uniq");

module.exports = function (str) {
  if (!(str instanceof Array)) {
    str = str.split(",");
  }
  return uniq(str);
};
