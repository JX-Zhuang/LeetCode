/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        if (ans.length) {
            ans[i] = nums[i] + ans[ans.length - 1];
        } else {
            ans[i] = nums[i];
        }
    }
    return ans;
};
