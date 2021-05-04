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
    var bucket = [];
    for (var key in map) {
        var count = map[key];
        if (!bucket[count]) {
            bucket[count] = [];
        }
        bucket[count].push(key);
    }
    var result = [];
    for (var i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }
        if (result.length >= k) break;
    }
    return result;
};