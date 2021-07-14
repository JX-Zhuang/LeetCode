/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    var m = board.length, n = board[0].length;
    var dfs = function (x, y) {
        if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') {
            return;
        }
        board[x][y] = '#';
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            const isEdge = i == 0 || i === m - 1 || j === 0 || j === n - 1;
            if (isEdge && board[i][j] === 'O') {
                dfs(i, j);
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] == '#') {
                board[i][j] = 'O';
            }
        }
    }
};