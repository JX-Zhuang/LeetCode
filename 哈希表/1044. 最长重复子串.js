/**
 * @param {string} s
 * @return {string}
 */
var find = function (l, a, modules, n, nums) {
    var h = 0;
    for (var i = 0; i < l; i++) h = (h * a + nums[i]) % modules;
    var m = new Set();
    m.add(h);
    let aL = 1;
    for (var i = 1; i <= l; i++) aL = (aL * a) % modules;
    for (var start = 1; start < n - l + 1; start++) {
        h = (h * a - nums[start - 1] * aL % modules + modules) % modules;
        h = (h + nums[start + l - 1]) % modules;
        if (m.has(h)) return start;
        m.add(h);
    }
    return -1;
}
var longestDupSubstring = function (s) {
    var length = s.length;
    var left = 1, right = length;
    var arr = new Array(s.length).fill(0).map((_, index) => s[index].charCodeAt() - 'a'.charCodeAt());
    var modules = Math.pow(2, 32);
    var a = 26;
    while (left !== right) {
        var l = left + Math.floor((right - left) / 2);
        if (find(l, a, modules, length, arr)!==-1) left = l + 1;
        else right = l;
    }
    var start = find(left - 1, a, modules, length, arr);
    return start === -1 ? "" : s.substring(start, start + l + 1);
};