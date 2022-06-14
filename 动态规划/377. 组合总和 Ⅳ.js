/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (var i = 0; i <= target; i++) {
        for (var n of nums) {
            if (i - n >= 0) {
                dp[i] += dp[i - n];
            }
        }
    }
    return dp[target];
};