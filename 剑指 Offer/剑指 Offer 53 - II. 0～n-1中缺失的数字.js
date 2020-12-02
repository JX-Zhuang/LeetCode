/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var i = 0; j = nums.length - 1;
    while (i <= j) {
        var mid = Math.floor((i + j) / 2);
        if (mid === nums[mid]) i = mid + 1;
        else j = mid - 1;
    }
    return i;
};