/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var m = {};
    for (var i = 0; i < s.length; i++) {
        if (!m.hasOwnProperty(s[i])) m[s[i]] = 0;
        m[s[i]]++;
    }
    var ans = 0;
    var l = 0;
    for (var k in m) {
        if (m[k] % 2) {
            l = Math.max(l, m[k])
        } else {
            ans += m[k];
        }
    }
    return ans + l;
};