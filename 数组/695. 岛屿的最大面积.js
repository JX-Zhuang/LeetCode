/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var result = 0, m = grid.length, n = grid[0] ? grid[0].length : 0;
    var helper = function (x, y) {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0) {
            return 0;
        };
        grid[x][y] = 0;
        return 1 + helper(x - 1, y) + helper(x + 1, y) + helper(x, y - 1) + helper(x, y + 1);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j]) {
                result = Math.max(helper(i, j), result);
            }
        }
    }
    return result;
};