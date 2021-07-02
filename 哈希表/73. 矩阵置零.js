/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var n = matrix.length, m = matrix[0].length;
    var zero = {
        row: {},
        col: {}
    };
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                zero.row[i] = true;
                zero.col[j] = true;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (zero.row[i] || zero.col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};