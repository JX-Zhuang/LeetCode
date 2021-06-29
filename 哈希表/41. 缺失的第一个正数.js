/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var set = new Set();
    var max = 1;
    for (var n of nums) {
        set.add(n);
        max = Math.max(max, n);
    }
    for (var i = 1; i <= max; i++) {
        if (!set.has(i)) return i;
    }
    return max + 1;
};
