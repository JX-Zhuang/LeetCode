/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        var index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }
    for (var i = 1; i <= nums.length; i++) {
        if (nums[i - 1] > 0) {
            arr.push(i);
        }
    }
    return arr;
};