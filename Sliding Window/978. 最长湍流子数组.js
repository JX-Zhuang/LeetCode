/**
 * @param {number[]} arr
 * @return {number}
 */
var compare = function(a, b) {
	if (a === b) return 0;
	return a > b ? 1 : -1;
};
var maxTurbulenceSize = function(arr) {
	var left = 0;
	var res = 1;
	for (var i = 1; i < arr.length; i++) {
		var c = compare(arr[i - 1], arr[i]);
		if (i === arr.length - 1 || c * compare(arr[i], arr[i + 1]) != -1) {
			if (c !== 0) res = Math.max(res, i - left + 1);
			left = i;
		}
	}
	return res;
};
