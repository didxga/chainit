(function(root, factory){

	if(typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(;
	} else {
		root.chainit = factory();
	}

})(this, function() {


	var chain = function() {
		this.queue = [];
		this.result = [];
		this.func;
		this.temp_result; 	
	};

	chain.prototype.serial = function() {
		if(!checkargs(arguments)) {
			return [];
		}
		
		var queue = Array.prototype.slice.call(arguments);
		queue.shift()(new handler(ref));

		return this;
	};

	chain.prototype.parallel = function() {

	};

	chain.prototype.getResult = function(func) {
		this.func = func;
	};

	function checkargs(arg) {
		var valid = true;
		if(arg.length == 0) {
			valid = false
		}
		return valid;
	}

	function handler(ref) {
		this.ref = ref;
	};

	handler.prototype.done = function(temp_result) {
		var func = queue.shift();

		if(func) {
			 func(this, temp_result);
		} else {
			this.ref.func(this.result);
		}

		queue.length == 0 && this.ref.result.push(temp_result);
	}


	return chain;

})
