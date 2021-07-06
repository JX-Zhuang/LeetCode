/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        var num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        } else {
            ans.push(num);
        }
    }
    return ans;
};