/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var ans = [];
    var arr = Array.from(new Array(n)).map(() => new Array(n).fill('.'));
    var isVaild = function (arr, row, col) {
        for (var i = 0; i < row; i++) {
            if (arr[i][col] === 'Q') return false;
        }
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i-- , j--) {
            if (arr[i][j] === 'Q') return false;
        }
        for (var i = row - 1, j = col + 1; i >= 0 && j < arr.length; i-- , j++) {
            if (arr[i][j] === 'Q') return false;
        }
        return true;
    };
    var backtrack = function (arr, row) {
        if (arr.length === row) {
            ans.push(arr.map(item => item.join('')));
            return;
        }
        for (var col = 0; col < n; col++) {
            if (!isVaild(arr, row, col)) continue;
            arr[row][col] = 'Q';
            backtrack(arr, row + 1);
            arr[row][col] = '.';
        }
    };
    backtrack(arr, 0);
    return ans;
};