/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var o = {};
    for (var n of nums) {
        if (o[n]) return [n, target - n];
        o[target - n] = true;
    }
};