process.stdin.on("data", function (buff) {
    for (var i = 0; i < buff.length; i += 1) {
	if (buff[i] === 0x2e) buff[i] = 0x21;
    }
    console.log(buff);
});
