/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var m = {};
    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        if (item in m) {
            m[item].count++;
        } else {
            m[item] = {
                count: 1,
                index: i
            };
        }
    }
    var min = s.length;
    for (var key in m) {
        if (m[key].count === 1) {
            if (m[key].index < min) min = m[key].index;
        }
    }
    return min === s.length ? -1 : min;
};