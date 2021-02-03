/**
 * @param {string} s
 * @return {string[][]}
 */
var check = function(start, end, s) {
	while (start < end) {
		if (s[start] === s[end]) {
			start++;
			end--;
		} else {
			return false;
		}
	}
	return true;
};
var partition = function(s) {
	var n = s.length;
	var dp = [ [ [ s[0] ] ] ];
	for (var i = 1; i < n; i++) {
		var temp = [];
		dp.push(temp);
		for (var j = i; j >= 0; j--) {
			if (check(j, i, s)) {
				if (j === 0) {
					temp.push([ s.slice(j, i + 1) ]);
				} else {
					for (var item of dp[j - 1]) {
						temp.push([ ...item, s.slice(j, i + 1) ]);
					}
				}
			}
		}
	}
	return dp[n - 1];
};
/**
 * @param {string} s
 * @return {string[][]}
 */
var check = function(start, end, s) {
	while (start < end) {
		if (s[start] === s[end]) {
			start++;
			end--;
		} else {
			return false;
		}
	}
	return true;
};
var partition = function(s) {
	var n = s.length;
	var dp = [ [ s[0] ] ];
	for (var i = 1; i < n; i++) {
		var l = dp.length;
		var newArr = [];
		for (var j = 0; j < l; j++) {
			var item = dp[j];
			var length = item.length;
			newArr.push(item.concat(s[i]));
			if (item[length - 1] === s[i]) {
				const temp = item.slice(0, length - 1);
				temp.push(item[length - 1] + s[i]);
				newArr.push(temp);
			}
			if (length >= 2 && item[length - 2] === s[i]) {
				const temp = item.slice(0, length - 2);
				temp.push(item[length - 2] + item[length - 1] + s[i]);
				newArr.push(temp);
			}
		}
		dp = newArr;
	}
	return dp;
};
