/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        var sum = nums[i];
        if (sum % k === 0) {
            ans++;
        }
        for (var j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum % k === 0) {
                ans++;
            }
        }
    }
    return ans;
};