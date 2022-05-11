/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var zeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++;
        }
    }
};