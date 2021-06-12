/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    var ans = 0;
    var m = new Map();
    m.set(0, -1);
    var sum = 0, j;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (!m.has(sum)) {
            m.set(sum, i);
        }
        j = sum - k;
        if (m.has(j)) {
            ans = Math.max(ans, i - m.get(j));
        }
    }
    return ans;
};