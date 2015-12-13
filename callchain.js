(function(root, factory){

	if(typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(;
	} else {
		root.chainit = factory();
	}

})(this, function(b) {


	var chain = function() {
		this.queue = [];
		this.result = [];
		this.temp_result; 	
	};

	chain.prototype.serial = function() {
		if(!checkargs(arguments)) {
			return [];
		}
		
		var queue = Array.prototype.slice.call(arguments);
		queue.shift()();

		return this;
	};

	chain.prototype.parallel = function() {

	};

	chain.prototype.getResult = function() {
		return this.result;
	};

	function checkargs(arg) {
		var valid = true;
		if(arg.length == 0) {
			valid = false
		}
		return valid;
	}

	function handler() {

	};

	handler.prototype.done = function() {
		var func = queue.shift();

		if(func) {
			temp_result = func(this, temp_result);
		}

		queue.length == 0 && result.push(temp_result);
	}


	return chain;

})