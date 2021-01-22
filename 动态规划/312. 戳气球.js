/**
 * @param {number[]} nums
 * @return {number}
 * dp[i][j] = dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j]
 */
var maxCoins = function (nums) {
    nums.push(1);
    nums.unshift(1);
    var n = nums.length;
    var dp = Array.from(new Array(n), () => new Array(n).fill(0));
    for (var i = n - 3; i>=0; i--) {
        for (var j = i + 2; j < n; j++) {
            for (var k = i + 1; k < j; k++) {
                console.log(i,j,k)
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]);
            }
        }
    }
    return dp[0][n - 1];
};
maxCoins([3,1,5,8]);