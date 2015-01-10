var net = require('net'),
    time = require('strftime');
var server = net.createServer(function (socket) {
    socket.end(time('%F %R'));
});
server.listen(process.argv[2]);
