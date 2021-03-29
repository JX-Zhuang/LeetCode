/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    var ans = '';
    while (columnNumber) {
        columnNumber--;
        const remain = columnNumber % 26;
        ans = String.fromCharCode(65 + remain) + ans;
        columnNumber = parseInt(columnNumber / 26);
    }
    return ans;
};