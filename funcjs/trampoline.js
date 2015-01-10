function repeat (operation, num) {
	if (num <= 0) return;
    return function () {
	operation()
	return repeat(operation, num -1);
    }

}

function trampoline(f) {
    while (f && f instanceof Function) {
	f = f.apply(f.context, f.args);
    }
    return f;
}

module.exports = function (operation, num) {
    return trampoline(repeat.bind(null,operation, num));
}
