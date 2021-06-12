/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    var ans = 0;
    var m = {
        0: -1
    };
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (!m.hasOwnProperty(sum)) m[sum] = i;
        var j = sum - k;
        if (m.hasOwnProperty(j)) {
            ans = Math.max(ans, i - m[j]);
        }
    }
    return ans;
};