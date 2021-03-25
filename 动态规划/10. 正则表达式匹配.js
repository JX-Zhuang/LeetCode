/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var n = s.length,
		m = p.length;
	var dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));
	for (var i = 0; i <= n; i++) {
		for (var j = 0; j <= m; j++) {
			if (j === 0) {
				dp[i][j] = i === 0;
			} else {
				if (p[j - 1] === '*') {
					dp[i][j] = dp[i][j - 2];
					if (i >= 1 && j >= 2 && (p[j - 2] === s[i - 1] || p[j - 2] === '.')) {
						dp[i][j] = dp[i][j] || dp[i - 1][j];
					}
				} else {
					if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
						dp[i][j] = dp[i - 1][j - 1];
					}
				}
			}
		}
	}
	return dp[n][m];
};
