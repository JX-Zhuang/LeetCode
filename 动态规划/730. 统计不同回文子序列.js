/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function (s) {
    var MOD = 1000000007;
    var n = s.length,
        dp = new Array(4).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
    for (var i = 0; i < n; i++) {
        dp[s[i].charCodeAt() - 'a'.charCodeAt()][i][i] = 1;
    }
    for (var len = 2; len <= n; len++) {
        for (var i = 0; i + len <= n; i++) {
            var j = i + len - 1;
            for (var c of ['a', 'b', 'c', 'd']) {
                var k = c.charCodeAt() - 'a'.charCodeAt();
                if (c === s[i] && c === s[j]) {
                    dp[k][i][j] = (2 + (dp[0][i + 1][j - 1] + dp[1][i + 1][j - 1]) % MOD + (dp[2][i + 1][j - 1] + dp[3][i + 1][j - 1]) % MOD) % MOD;
                } else if (c === s[i]) {
                    dp[k][i][j] = dp[k][i][j - 1];
                } else if (c === s[j]) {
                    dp[k][i][j] = dp[k][i + 1][j];
                } else {
                    dp[k][i][j] = dp[k][i + 1][j - 1];
                }
            }
        }
    }
    var res = 0;
    for (let i = 0; i < 4; i++) {
        res = (res + dp[i][0][n - 1]) % MOD;
    }
    return res;
};