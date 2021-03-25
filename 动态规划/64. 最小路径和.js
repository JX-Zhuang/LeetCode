/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var m = grid.length;
    var n = grid[0].length;
    var dp = Array.from(new Array(m)).map(i => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for (var i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    for (var j = 1; j < n; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};

// dp[m][n] = Math.min(dp[m-1][n],dp[m][n-1])+grid[m-1][n-1];