/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	var dp = new Array(n + 1).fill(0);
	for (var i = 1; i <= n; i++) {
		dp[i] = i;
		for (var j = 1; i - j * j >= 0; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
		}
	}
	return dp[n];
};
