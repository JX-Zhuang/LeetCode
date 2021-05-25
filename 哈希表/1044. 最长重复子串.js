/**
 * @param {string} s
 * @return {string}
 */
var find = function (l, s) {
    var m = new Set();
    for (var j = 0; j < s.length; j++) {
        var str = s.substr(j, l);
        if (m.has(str)) return str;
        m.add(str);
    }
    return '';
}
var longestDupSubstring = function (s) {
    var length = s.length;
    var left = 1, right = length;
    while (left !== right) {
        var l = left + Math.floor((right - left) / 2);
        if (find(l, s)) left = l + 1;
        else right = l;
    }
    return find(left - 1, s);
};