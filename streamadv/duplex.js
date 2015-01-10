var spawn = require("child_process").spawn,
    duplexer = require("duplexer");

module.exports = function (cmd, args) {
    var childPro = spawn(cmd, args);
    return duplexer(childPro.stdin, childPro.stdout);
};
