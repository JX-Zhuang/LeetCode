/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    var ans = 0;
    var m = { 0: 1 };
    var prevModSum = 0;
    for (var i = 0; i < nums.length; i++) {
        prevModSum = (prevModSum + nums[i]) % k;
        if (prevModSum < 0) prevModSum += k;
        if (m[prevModSum]) {
            ans += m[prevModSum]++;
        } else {
            m[prevModSum] = 1;
        }
    }
    return ans;
};