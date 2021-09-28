/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    var ans = [];
    var low = lower - 1;
    nums.push(upper + 1);
    var diff;
    for (var num of nums) {
        diff = num - low;
        if (diff === 2) ans.push(low + 1 + '');
        else if (diff > 2) ans.push(`${low + 1}->${num - 1}`);
        low = num;
    }
    return ans;
};