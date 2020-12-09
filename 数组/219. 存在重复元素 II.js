/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var o = {};
    for (var i in nums) {
        var n = nums[i];
        if (o.hasOwnProperty(n)) {
            if (i - o[n] <= k) return true;
        }
        o[n] = i;
    }
    return false;
};