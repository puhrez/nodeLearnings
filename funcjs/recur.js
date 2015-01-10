function reduce(arr, fn, init) {
    if (!arr.length) return init;
    var item = arr[0];
    init[item] = fn(init, item, 0, arr)[item];
    var rest = arr.slice(1);
    return reduce(rest, fn, init);
}

module.exports = reduce;
