/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    var rows = [], cols = [], boxes = [];
    for (var i = 0; i < board.length; i++) {
        rows[i] = {};
        cols[i] = {};
        boxes[i] = {};
    }
    var l1 = board.length, l2 = board[0].length;
    var item, boxIndex;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            item = board[i][j];
            if (item === '.') continue;
            boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i][item] || cols[j][item] || boxes[boxIndex][item]) return false;
            rows[i][item] = true;
            cols[j][item] = true;
            boxes[boxIndex][item] = true;
        }
    }
    return true;
};