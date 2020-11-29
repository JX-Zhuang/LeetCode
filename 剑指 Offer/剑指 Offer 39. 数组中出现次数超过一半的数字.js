/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var x = 0, count = 0;
    for (var n of nums) {
        if (count === 0) x = n;
        count += n === x ? 1 : -1;
    }
    return x;
};