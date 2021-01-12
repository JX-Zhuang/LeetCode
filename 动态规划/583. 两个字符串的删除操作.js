/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	var n1 = word1.length,
		n2 = word2.length;
	var dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0));
	for (var i = 1; i <= n1; i++) {
		for (var j = 1; j <= n2; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}
	return n1 + n2 - 2 * dp[n1][n2];
};
