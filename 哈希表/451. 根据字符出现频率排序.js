/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var m = new Map();
    for (var item of s) {
        if (!m.has(item)) m.set(item, {
            count: 0,
            str: ''
        });
        m.get(item).count++;
        m.get(item).str += item;
    }
    m = new Map([...m].sort((a, b) => b[1].count - a[1].count));
    var ans = '';
    for (var [k, v] of m) {
        ans += v.str;
    }
    return ans;
};