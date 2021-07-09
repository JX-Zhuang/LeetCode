/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    if (nums.length === 1) return false;
    var map = new Map();
    var remainder = 0;
    map.set(0, -1);
    for (var i = 0; i < nums.length; i++) {
        remainder = (remainder + nums[i]) % k;
        if (map.has(remainder)) {
            if (i - map.get(remainder) >= 2) return true;
        } else {
            map.set(remainder, i);
        }
    }
    return false;
};