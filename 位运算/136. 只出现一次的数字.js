/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var ans = 0;
    for (var n of nums)
        ans ^= n;
    return ans;
};