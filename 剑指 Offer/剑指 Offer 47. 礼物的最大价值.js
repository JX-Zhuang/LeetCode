/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    var n = grid.length;
    var m = grid[0].length;
    var dp = [];
    for (var i = 0; i < n; i++) {
        dp[i] = [];
        for (var j = 0; j < m; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
    }
    return dp[n - 1][m - 1];
};