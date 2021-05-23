/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    var m = {};
    var ans = '';
    for (var i = 0; i < s.length - 1; i++) {
        var str = s[i];
        for (var j = i + 1; j < s.length; j++) {
            str += s[j];
            if (!m.hasOwnProperty(str)) {
                m[str] = 0;
            }
            m[str]++;
            if (m[str] > 1 && str.length > ans.length) {
                ans = str;
            }
        }
    }
    return ans;
};