/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var isValid = function (row, col, s) {
        for (var i = 0; i < board.length; i++) {
            if (board[row][i] === s) return false;
            if (board[i][col] === s) return false;
            var _row = Math.floor(row / 3) * 3 + Math.floor(i / 3);
            var _col = Math.floor(col / 3) * 3 + i % 3;
            if (board[_row][_col] === s) return false;
        }
        return true;
    };
    var backtrack = function (row, col) {
        if (row === board.length) return true;
        if (col === board.length) return backtrack(row + 1, 0);
        if (board[row][col] !== '.') return backtrack(row, col + 1);
        for (var i = 1; i <= 9; i++) {
            var s = String(i);
            if (!isValid(row, col, s)) continue;
            board[row][col] = s;
            if (backtrack(row, col + 1)) return true;
            board[row][col] = '.';
        }
    };
    backtrack(0, 0);
};