/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    var ans = 0;
    var m = {
    };
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        m[sum] = i;
        if (sum === k) ans = i;
        if (m.hasOwnProperty(-k) && nums[i] !== -k) {
            ans = Math.max(ans, i - m[-k] + 1);
        }
    }
    return ans;
};