/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	var n = s.length;
	var dp = new Array(n).fill(0);
	var ans = 0;
	for (var i = 1; i < n; i++) {
		var item = s[i];
		if (item === ')') {
			if (s[i - 1] === '(') {
				dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
			} else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
				dp[i] = 2 + dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
			}
			ans = Math.max(ans, dp[i]);
		}
	}
	return ans;
};
