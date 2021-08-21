/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var result = [];
    var rows = matrix.length;
    if (rows == 0) return result;
    var cols = matrix[0].length;
    var visited = Array.from(new Array(rows), () => new Array(cols).fill(false));
    var printNumber = function (x, y) {
        if (visited[x][y]) return;
        var lX = rows - 2 * x,
            lY = cols - 2 * y;
        for (var i = y; i <= lY - 1; i++) {
            if (visited[x][i]) continue;
            result.push(matrix[x][i]);
            visited[x][i] = true;
        }
        for (var j = x; j <= lX - 1; j++) {
            if (visited[j][lY - 1]) continue;
            result.push(matrix[j][lY - 1]);
            visited[j][lY - 1] = true;
        }
        for (var k = lY - 1; k >= y; k--) {
            if (visited[lX - 1][k]) continue;
            result.push(matrix[lX - 1][k]);
            visited[lX - 1][k] = true;
        }
        for (var h = lX - 1; h >= x; h--) {
            if (visited[h][y]) continue;
            result.push(matrix[h][y]);
            visited[h][y] = true;
        }
        printNumber(x + 1, y + 1);
    }
    printNumber(0, 0);
    return result
};