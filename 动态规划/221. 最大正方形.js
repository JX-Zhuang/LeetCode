/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
	var m = matrix.length,
		n = matrix[0].length;
	var dp = Array.from(new Array(m)).map((i) => new Array(n).fill(0));
	var max = 0;
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (matrix[i][j] === '1') {
				if (i === 0 || j === 0) {
					dp[i][j] = 1;
				} else {
					if (i === 2 && j === 3) {
					}
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
				}
				max = Math.max(dp[i][j], max);
			}
		}
	}
	return max * max;
};
