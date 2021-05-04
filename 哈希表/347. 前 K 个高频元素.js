/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var map = {};
    for (var n of nums) {
        if (!map.hasOwnProperty(n)) {
            map[n] = 0;
        }
        map[n]++;
    }
    var o = {};
    for (var key in map) {
        const count = map[key];
        if (!o.hasOwnProperty(count)) {
            o[count] = [];
        }
        o[count].push(key);
    }
    const counts = Object.keys(o).sort((a, b) => b - a);
    let result = [];
    for (const item of counts) {
        result = result.concat(o[item]);
        if (result.length >= k) return result;
    }
    return result;
};