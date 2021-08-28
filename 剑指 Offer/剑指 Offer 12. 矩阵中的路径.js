/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var m = board.length, n = board[0].length;
    var visited = Array.from(new Array(m), () => new Array(n).fill(false));
    var arr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    var backtrack = function (i, j, w) {
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j]) return false;
        w += board[i][j];
        if (!word.startsWith(w)) return false;
        if (w === word) return true;
        visited[i][j] = true;
        var result = false;
        for (var item of arr) {
            var newI = i + item[0], newJ = j + item[1]
            result ||= backtrack(newI, newJ, w);
        }
        visited[i][j] = false;
        return result;
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (backtrack(i, j, '')) return true;
        }
    }
    return false;
};