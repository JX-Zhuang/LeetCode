/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var max = nums[0], sum = 0;
    for (var n of nums) {
        if (sum < 0) {
            sum = 0;
        } else {
            sum += n;
        }
        max = Math.max(max, sum);
    }
    return max;
};