/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    var o = {};
    for (var n of nums) {
        if (!(n in o)) o[n] = 0;
        o[n]++;
    }
    var ans = 0;
    for (var k in o) {
        var count = o[k];
        ans += (count * (count - 1) / 2);
    }
    return ans;
};