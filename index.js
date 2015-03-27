(function () {

	var SPACE = /\s+/;
	var toString = Object.prototype.toString;

	function _classNames () {
		// Use Array join instead of string concat to avoid string copy
		var classes = [];
		var arg;
		var existing;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg) {
				arg = arg.split(SPACE);
				// If there's no space, concat right away to avoid infinite loop
				classes = classes.concat(arg.length < 2 ? arg : _classNames.apply(null, arg));
			} else if ('number' === typeof arg) {
				classes.push(arg);
			} else if (toString.call(arg) === '[object Array]') {
				classes = classes.concat(_classNames.apply(null, arg));
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key)) {
						continue;
					}

					if (arg[key]) {
						classes.push(key);
					} else if ((existing = classes.indexOf(key)) > -1) {
						classes.splice(existing, 1);
					}
				}
			}
		}
		return classes;
	}

	function classNames() {
		return _classNames.apply(null, arguments).join(' ');
	}

	// safely export classNames in case the script is included directly on a page
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof window !== 'undefined') {
		window.classNames = classNames;
	} else {
		this.classNames = classNames;
	}

})();
