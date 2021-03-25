/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var ans = [];
    var backtrack = function (arr, start) {
        ans.push(arr.slice());
        for (var i = start; i < nums.length; i++) {
            arr.push(nums[i]);
            backtrack(arr, i + 1);
            arr.pop();
        }
    };
    backtrack([], 0);
    return ans;
};