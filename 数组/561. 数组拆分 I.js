/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var ans = 0;
    nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length; i = i + 2) {
        ans += nums[i];
    }
    return ans;
};