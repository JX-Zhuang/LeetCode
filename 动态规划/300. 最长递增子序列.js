/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    var dp = new Array(nums.length).fill(1);
    dp[0] = 1;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))