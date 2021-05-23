/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    var ans = '';
    for (var i = Math.ceil(s.length / 2); i >= 2; i--) {
        var m = new Set();
        for (var j = 0; j < s.length; j++) {
            var str = s.substr(j, i);
            if (m.has(str)) return str;
            m.add(str);
        }
    }
    return ans;
};
