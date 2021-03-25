/**
 * @param {number} n
 * @return {number}
 */
var max = function (a, b) {
    return a > b ? a : b;
}
var cuttingRope = function (n) {
    var dp = new Array(n + 1).fill(BigInt(0));
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j < i; j++) {
            dp[i] = max(dp[i], max(BigInt((i - j) * j), dp[i - j] * BigInt(j)));
        }
    }
    return dp[n] % BigInt(1000000007);
};