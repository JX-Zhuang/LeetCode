/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    var arr = s.split(' ');
    var m = {};
    var n = {};
    if (pattern.length !== arr.length) return false;
    for (var i = 0; i < pattern.length; i++) {
        var item = pattern[i];
        if (!m.hasOwnProperty(item) && !n.hasOwnProperty(arr[i])) {
            m[item] = arr[i];
            n[arr[i]] = item;
        } else {
            if (m[item] !== arr[i]) return false;
        }
    }
    return true;
};