/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    var left = 0;
    var ans = 0;
    var sum = 0;
    for (var right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            ans = ans === 0 ? right - left + 1 : Math.min(ans, right - left + 1);
            sum -= nums[left++];
        }
    }
    return ans;
};