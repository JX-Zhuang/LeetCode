/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
//charCodeAt
var minimumDeleteSum = function(s1, s2) {
	var n1 = s1.length,
		n2 = s2.length;
	var dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0));
	for (var i = 1; i <= n1; i++) {
		dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt();
	}
	for (var j = 1; j <= n2; j++) {
		dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt();
	}
	for (var i = 1; i <= n1; i++) {
		for (var j = 1; j <= n2; j++) {
			if (s1[i - 1] === s2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(dp[i - 1][j] + s1[i - 1].charCodeAt(), dp[i][j - 1] + s2[j - 1].charCodeAt());
			}
		}
	}
	return dp[n1][n2];
};
