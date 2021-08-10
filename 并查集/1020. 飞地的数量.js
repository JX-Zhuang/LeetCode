/**
 * @param {number[][]} grid
 * @return {number}
 */

var numEnclaves = function (grid) {
    var l1 = grid.length, l2 = grid[0].length;
    var dfs = function (i, j) {
        if (i < 0 || j < 0 || i >= l1 || j >= l2 || grid[i][j] === 0) {
            return;
        }
        grid[i][j] = 0;
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    var isBoard = function (i, j) {
        return i === 0 || j === 0 || i === l1 - 1 || j === l2 - 1;
    };
    var result = 0;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            if (isBoard(i, j) && grid[i][j]) dfs(i, j);
        }
    }
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            if (grid[i][j]) result++;
        }
    }
    return result;
};