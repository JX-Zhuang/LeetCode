/**
 * @param {number} n
 * @return {number}
 * 与 343. 整数拆分 一样
 */
var cuttingRope = function (n) {
    var dp = new Array(n + 1).fill(0);
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};