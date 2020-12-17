/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (var i = 0; i < dp.length; i++) {
        for (var c of coins) {
            if (i - c < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};