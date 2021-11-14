/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var m = {};
    for (var item of strs) {
        const key = item.split('').sort().join('');
        if (!m.hasOwnProperty(key)) {
            m[key] = [];
        }
        m[key].push(item);
    }
    return Object.keys(m).map(k => m[k]);
};