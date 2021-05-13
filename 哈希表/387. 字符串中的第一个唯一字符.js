/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var m = {};
    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        if (item in m) {
            m[item]++;
        } else {
            m[item] = 1;
        }
    }
    for (var i in s) {
        if (m[s[i]] === 1) return i;
    }
    return -1;
};