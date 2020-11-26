/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) return false;
    var n = matrix.length;
    var m = matrix[0].length;
    var row = n - 1, col = 0;
    while (row >= 0 && col < m) {
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else {
            return true;
        }
    }
    return true;
};