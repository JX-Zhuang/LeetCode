/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * 
 *  p的最后一个
 *     字母：比较s[i-1]和p[j-1]。如果相等，比较s 0...i-2和p 0...j-2;如果不相等，不匹配
 *     .：比较s 0...i-2和p 0...i-2
 *     *：
 *        1. 如果s[i-1]!=p[j-2]，比较s 0...i-1和p 0...j-3
 *        2. 如果s[i-1]==p[j-2]，比较s 0...i-2和p 0...j-1
 * 
 *  字母：dp[i][j] = dp[i-1][j-1]
 *  .  ：dp[i][j] = dp[i-1][j-1]
 *  *  ：
 *      1. dp[i][j] = dp[i][j-2]
 *      2. dp[i][j] = dp[i-1][j];
 * s空，p空 ： dp[0][0] = true
 * s空，p非空：
 * s非空，p空：dp[x][0] = false,x!=0
 * s非空，p非空：
 */
var isMatch = function (s, p) {
    var n = s.length, m = p.length;
    var dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= m; j++) {
            if (j === 0) {
                dp[i][j] = i === 0;
            } else {
                if (p[j - 1] !== '*') {
                    if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                } else {
                    if (j >= 2) {
                        dp[i][j] |= dp[i][j - 2];
                    }
                    if (i >= 1 && j >= 2 && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
                        dp[i][j] = f[i - 1][j];
                    }
                }
            }
        }
    }
    return dp[n][m];
};