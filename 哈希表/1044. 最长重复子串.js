/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    var m = {};
    var ans = '';
    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        m = { ...m };
        for (var key in m) {
            var newK = key + item;
            m[newK] = m[key];
        }
        if (!m.hasOwnProperty(item)) {
            m[item] = 0;
        }
        m[item]++;
    }
    for (var key in m) {
        if (m[key] > 1 && key.length > ans.length) ans = key;
    }
    return ans;
};
