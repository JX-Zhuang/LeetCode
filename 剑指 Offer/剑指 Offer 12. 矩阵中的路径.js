/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var m = board.length, n = board[0].length;
    var backtrack = function (i, j, k) {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        board[i][j] = '';
        var result = backtrack(i + 1, j, k + 1) || backtrack(i - 1, j, k + 1)
            || backtrack(i, j + 1, k + 1) || backtrack(i, j - 1, k + 1);
        board[i][j] = word[k];
        return result;
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }
    return false;
};