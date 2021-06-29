/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        if (nums[i] <= 0) nums[i] = n + 1;
    }
    for (var i = 0; i < n; i++) {
        var item = Math.abs(nums[i]);
        if (item <= n) nums[item - 1] = -Math.abs(nums[item - 1]);
    }
    for (var i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
};
