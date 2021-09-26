/**
 * @param {string} columnTitle
 * @return {number}
 */
var getNum = (ch) => ch.charCodeAt() - 64;
var titleToNumber = function (columnTitle) {
    var res = 0;
    var multiple = 1;
    for (var i = columnTitle.length - 1; i >= 0; i--) {
        res += getNum(columnTitle[i]) * multiple;
        multiple *= 26;
    }
    return res;
};