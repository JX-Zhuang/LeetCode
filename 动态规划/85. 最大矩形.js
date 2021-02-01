/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
	var m = matrix.length,
		n = matrix[0].length;
	var dp = Array.from(new Array(m)).map((i) => new Array(n).fill(0));
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (matrix[i][j] === '1') {
				dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
			}
		}
	}
	var ans = 0;
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (matrix[i][j] === '0') continue;
			var width = dp[i][j];
			var area = width;
			for (var k = i - 1; k >= 0; k--) {
				width = Math.min(width, dp[k][j]);
				area = Math.max(area, width * (i - k + 1));
			}
			ans = Math.max(area, ans);
		}
	}
	return ans;
};
