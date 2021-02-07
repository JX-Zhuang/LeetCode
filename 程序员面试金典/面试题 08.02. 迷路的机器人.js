/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
	if (obstacleGrid.length === 0) return [];
	if (obstacleGrid[0][0]) return [];
	var m = obstacleGrid.length,
		n = obstacleGrid[0].length;
	var dp = Array.from(new Array(m), () => new Array(n).fill([]));
	dp[0][0] = [ [ 0, 0 ] ];
	for (var i = 1; i < n; i++) {
		if (obstacleGrid[0][i] !== 1 && dp[0][i - 1].length) {
			dp[0][i] = dp[0][i - 1].concat([ [ 0, i ] ]);
		}
	}
	for (var j = 1; j < m; j++) {
		if (obstacleGrid[j][0] !== 1 && dp[j - 1][0].length) {
			dp[j][0] = dp[j - 1][0].concat([ [ j, 0 ] ]);
		}
	}
	for (var i = 1; i < m; i++) {
		for (var j = 1; j < n; j++) {
			if (obstacleGrid[i][j] === 1) continue;
			dp[i][j] = dp[i][j - 1].length > dp[i - 1][j].length ? dp[i][j - 1] : dp[i - 1][j];
			if (dp[i][j].length) {
				dp[i][j] = dp[i][j].concat([ [ i, j ] ]);
			}
		}
	}
	return dp[m - 1][n - 1];
};
