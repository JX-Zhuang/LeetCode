/**
 * @param {number[][]} grid
 * @return {number}
 */
var getLength = function (i, j, rows, cols, grid) {
    var ans = 4;
    var up = i - 1,
        down = i + 1,
        left = j - 1,
        right = j + 1;
    if (up >= 0) {
        if (grid[up][j] === 1) ans--;
    }
    if (down < rows) {
        if (grid[down][j] === 1) ans--;
    }
    if (left >= 0) {
        if (grid[i][left] === 1) ans--;
    }
    if (right < cols) {
        if (grid[i][right] === 1) ans--;
    }
    return ans;
}
var islandPerimeter = function (grid) {
    var ans = 0;
    var rows = grid.length;
    var cols = grid[0].length;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] === 0) continue;
            ans += getLength(i, j, rows, cols, grid);
        }
    }
    return ans;
};