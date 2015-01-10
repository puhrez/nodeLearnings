function Spy(target, method) { 
    //saving the original function
    var originFun = target[method];

    //the object to construct, it's count will still be affected because its within the scope of the new function
    var result = {
	count: 0
    }

    target[method] = function() {
	result.count += 1;
	return originFun.apply(this, arguments); //becuse we wanna override, but maintain the same functionality
    }

    //return the object to construct it
    return result;
}
module.exports = Spy;
