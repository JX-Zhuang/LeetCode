/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    var n = nums.length;
    var max = Number.MIN_SAFE_INTEGER, right = -1,
        min = Number.MAX_SAFE_INTEGER, left = -1;
    for (var i = 0; i < n; i++) {
        if (max > nums[i]) {
            right = i;
        } else {
            max = nums[i];
        }
        if (min < nums[n - i - 1]) {
            left = n - i - 1;
        } else {
            min = nums[n - i - 1];
        }
    }
    return right === -1 ? 0 : right - left + 1;
};