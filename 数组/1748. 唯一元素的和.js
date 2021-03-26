/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    var o = {};
    var ans = 0;
    for (var i of nums) {
        if (!o.hasOwnProperty(i)) {
            o[i] = 0;
        }
        o[i]++;
    }
    for (var k in o) {
        if (o[k] === 1) ans += Number(k);
    }
    return ans;
};