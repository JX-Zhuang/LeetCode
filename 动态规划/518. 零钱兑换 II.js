/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // i:前几枚硬币；j:总金额
    var n = amount, m = coins.length;
    var dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
    for (var i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (j < coins[i - 1]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }

        }
    }
    return dp[m][n];
};
var change = function (amount, coins) {
    var n = coins.length;
    var dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (var i = 1; i <= n; i++) {
        for (var j = coins[i - 1]; j <= amount; j++) {
            dp[j] = dp[j] + dp[j - coins[i - 1]];
        }
    }
    return dp[amount];
};