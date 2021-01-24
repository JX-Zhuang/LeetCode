/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(getRob(nums.slice(0, nums.length - 1)), getRob(nums.slice(1, nums.length)));
};
var getRob = function (nums) {
    var current = 0, prev = 0;
    for (var i = 0; i < nums.length; i++) {
        var temp = current;
        current = Math.max(prev + nums[i], current);
        prev = temp;
    }
    return current;
};