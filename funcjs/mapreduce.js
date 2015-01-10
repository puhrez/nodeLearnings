module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (init, curr, index, array) {
    	return init.concat(fn(curr));
    }, []);
}

