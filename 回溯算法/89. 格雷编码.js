/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
	var head = 1;
	var ans = [0];
	for (var i = 0; i < n; i++) {
		for (var j = ans.length - 1; j >= 0; j--) {
			ans.push(head + ans[j]);
		}
		head <<= 1;
	}
	return ans;
};