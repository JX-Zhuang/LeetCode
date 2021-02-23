/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var ans = [];
    var backtrack = function (start, track) {
        ans.push(track);
        for (var i = start; i < nums.length; i++) {
            backtrack(i + 1, track.concat(nums[i]));
        }
    };
    backtrack(0, []);
    return ans;
};