/**
 * @param {string} s
 * @return {string}
 */
var find = function (l, s) {
    var m = new Set();
    var str = '';
    for (var i = 0; i < l; i++) str += s[i];
    m.add(str);
    for (var start = 1; start < s.length - l + 1; start++) {
        str = str.replace(str[0], '');
        str = str + s[start + l - 1];
        // var str = s.substr(start, l);
        if (m.has(str)) return str;
        m.add(str);
    }
    return '';
}
var longestDupSubstring = function (s) {
    var length = s.length;
    var left = 1, right = length;
    var arr = new Array(s.length).fill(0).map(s => s.charCodeAt() - 'a'.charCodeAt());
    while (left !== right) {
        var l = left + Math.floor((right - left) / 2);
        if (find(l, s)) left = l + 1;
        else right = l;
    }
    return find(left - 1, s);
};