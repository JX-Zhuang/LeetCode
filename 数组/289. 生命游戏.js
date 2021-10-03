/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    var m = board.length, n = board[0].length;
    var copyBoard = [];// visited = [];
    for (var i = 0; i < m; i++) {
        copyBoard[i] = [];
        // visited[i] = [];
        for (var j = 0; j < n; j++) {
            copyBoard[i][j] = board[i][j];
            // visited[i][j] = false;
        }
    }
    var arr = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]];
    var checked = function (i, j) {
        var count0 = 0, count1 = 0;
        for (var item of arr) {
            var newI = item[0] + i, newJ = item[1] + j;
            if (newI < 0 || newI >= m || newJ < 0 || newJ >= n) continue;
            if (copyBoard[newI][newJ] === 0) count0++;
            else count1++;
        }
        if (copyBoard[i][j] === 0) {
            if (count1 === 3) {
                board[i][j] = 1;
            }
        } else {
            if (count1 < 2 || count1 > 3) board[i][j] = 0;
        }
    };
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            checked(i, j);
        }
    }
};