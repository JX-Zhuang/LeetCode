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
 */
var isMatch = function(s, p) {

};