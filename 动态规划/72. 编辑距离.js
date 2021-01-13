/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	var dp = function(i, j) {
		if (i == -1) return j + 1;
		if (j == -1) return i + 1;
		if (word1[i] === word2[j]) {
			return dp(i - 1, j - 1);
		} else {
			return Math.min(dp(i - 1, j) + 1, dp(i, j - 1) + 1, dp(i - 1, j - 1) + 1);
		}
	};
	return dp(word1.length - 1, word2.length - 1);
};
var minDistance = function(word1, word2) {
	var memo = new Array(word1.length).fill(0).map(() => new Array(word2.length).fill(-1));
	var dp = function(i, j) {
		if (i == -1) return j + 1;
		if (j == -1) return i + 1;
		if (memo[i][j] !== -1) return memo[i][j];
		if (word1[i] === word2[j]) {
			memo[i][j] = dp(i - 1, j - 1);
		} else {
			memo[i][j] = Math.min(dp(i - 1, j) + 1, dp(i, j - 1) + 1, dp(i - 1, j - 1) + 1);
		}
		return memo[i][j];
	};
	return dp(word1.length - 1, word2.length - 1);
};
var minDistance = function(word1, word2) {
	var m = word1.length,
		n = word2.length;
	var dp = new Array(m + 1).fill(0).map(() => new Array(n + 1));
	for (var i = 0; i <= m; i++) {
		dp[i][0] = i;
	}
	for (var j = 0; j <= n; j++) {
		dp[0][j] = j;
	}
	for (var i = 1; i <= m; i++) {
		for (var j = 1; j <= n; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
			}
		}
	}
	return dp[m][n];
};
