/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function (nums, i) {
    var left = i, right = nums.length - 1;
    while (left < right) {
        swap(nums, left++, right--);
    }
}
var swap = function (nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
var nextPermutation = function (nums) {
    var i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        var j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
};