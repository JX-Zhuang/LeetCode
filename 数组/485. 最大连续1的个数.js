/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var max = 0, current = 0;
    for (var n of nums) {
        if (n === 0) {
            max = Math.max(current, max);
            current = 0;
        } else {
            current++;
        }
    }
    return Math.max(current, max);
};