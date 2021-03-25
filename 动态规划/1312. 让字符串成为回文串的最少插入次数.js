/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    var n = s.length;
    var dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (var i = n - 2; i >= 0; i--) {
        for (var j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[0][n - 1];
};