/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
	var dp = new Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0));
	var m = 0;
	while (dp[K][m] < N) {
		m++;
		for (var i = 1; i <= K; i++) {
			dp[i][m] = 1 + dp[i][m - 1] + dp[i - 1][m - 1];
		}
	}
	return m;
};
