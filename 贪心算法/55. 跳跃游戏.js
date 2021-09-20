/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var max = 0;
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
        if (max >= n - 1) return true;
    }
};