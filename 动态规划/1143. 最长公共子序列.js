/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	var m = text1.length,
		n = text2.length;
	var memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));
	var dp = function(s1, i, s2, j) {
		if (i === m || j === n) return 0;
		if (memo[i][j] !== -1) return memo[i][j];
		if (s1[i] === s2[j]) {
			memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
		} else {
			memo[i][j] = Math.max(dp(s1, i + 1, s2, j), dp(s1, i, s2, j + 1));
		}
		return memo[i][j];
	};
	return dp(text1, 0, text2, 0);
};

var longestCommonSubsequence = function(text1, text2) {
	var m = text1.length,
		n = text2.length;
	var dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
	for (var i = 1; i <= m; i++) {
		for (var j = 1; j <= n; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = 1 + dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
};
var longestCommonSubsequence = function(text1, text2) {
	var m = text1.length,
		n = text2.length;
	var dp = new Array(n + 1).fill(0);
	for (var i = 1; i <= m; i++) {
		var prev = 0;
		for (var j = 1; j <= n; j++) {
			var temp = dp[j];
			if (text1[i - 1] === text2[j - 1]) {
				dp[j] = 1 + prev;
			} else {
				dp[j] = Math.max(dp[j], dp[j - 1]);
			}
			prev = temp;
		}
	}
	return dp[n];
};
