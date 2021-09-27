/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    var arr = [...nums];
    arr.sort((a, b) => a - b);
    var n = nums.length;
    for (var i = 1; i < nums.length; i += 2) {
        nums[i] = arr[--n];
    }
    for (var i = 0; i < nums.length; i += 2) {
        nums[i] = arr[--n];
    }
};