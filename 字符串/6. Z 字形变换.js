/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    if (numRows <= 1) return s;
    var arr = new Array(numRows).fill('');
    var row = 0, flag = -1;
    for (var i = 0; i < s.length; i++) {
        arr[row] += s[i];
        if (row === 0 || row === numRows - 1) {
            flag = -flag;
        }
        row += flag;
    }
    return arr.join('');
};