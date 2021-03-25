/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var m = s.length,
		n = p.length;
	var dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
	dp[0][0] = true;
	for (var j = 1; j <= n; j++) {
		if (p[j - 1] === '*') {
			dp[0][j] = true;
		} else {
			break;
		}
	}
	for (var i = 1; i <= m; i++) {
		for (var j = 1; j <= n; j++) {
			if (p[j - 1] === '*') {
				dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
			} else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			}
		}
	}
	return dp[m][n];
};
