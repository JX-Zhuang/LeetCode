/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var result = [];
    var rows = matrix.length;
    if (rows == 0) return result;
    var cols = matrix[0].length;
    var printNumber = function (x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols || matrix[x][y] === true) return;
        var lX = rows - x,
            lY = cols - y;
        for (var i = y; i <= lY - 1; i++) {
            if (matrix[x][i] === true) continue;
            result.push(matrix[x][i]);
            matrix[x][i] = true;
        }
        for (var j = x; j <= lX - 1; j++) {
            if (matrix[j][lY - 1] === true) continue;
            result.push(matrix[j][lY - 1]);
            matrix[j][lY - 1] = true;
        }
        for (var k = lY - 1; k >= y; k--) {
            if (matrix[lX - 1][k] === true) continue;
            result.push(matrix[lX - 1][k]);
            matrix[lX - 1][k] = true;
        }
        for (var h = lX - 1; h >= x; h--) {
            if (matrix[h][y] === true) continue;
            result.push(matrix[h][y]);
            matrix[h][y] = true;
        }
        printNumber(x + 1, y + 1);
    }
    printNumber(0, 0);
    return result
};