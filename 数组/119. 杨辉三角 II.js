/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var ans = new Array(rowIndex + 1).fill(0);
    ans[0] = 1;
    for (var i = 0; i <= rowIndex; i++) {
        for (var j = i; j > 0; j--) {
            ans[j] += ans[j - 1];
        }
    }
    return ans;
};