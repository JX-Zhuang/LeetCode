/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var l = nums.length;
    var sum = (l + 1) / 2 * l;
    for (var i = 0; i < l; i++) {
        sum -= nums[i];
    }
    return sum;
};