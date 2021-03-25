/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    var dp = [1];
    var a = 0, b = 0, c = 0;
    for (var i = 1; i < n; i++) {
        var n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5;
        dp[i] = Math.min(n2, n3, n5);
        if (dp[i] === n2) a++;
        if (dp[i] === n3) b++;
        if (dp[i] === n5) c++;
    }
    return dp[n - 1];
};