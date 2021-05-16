/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    var ans = nums.length + 1;
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                ans = Math.min(ans, j - i + 1);
            }
        }
    }
    return ans === nums.length + 1 ? 0 : ans;
};