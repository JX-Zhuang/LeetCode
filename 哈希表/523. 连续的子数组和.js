/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === 0 && nums[i - 1] === 0) return true;
    }
    if (nums.length === 1) return false;
    var set = new Set();
    var sum = nums[0];
    set.add(sum % k);
    for (var i = 1; i < nums.length; i++) {
        sum += nums[i];
        var remainder = sum % k;
        if (remainder === 0) return true;
        if (sum >= k && nums[i] % k && set.has(remainder)) return true;
        set.add(remainder);
    }
    return false;
};