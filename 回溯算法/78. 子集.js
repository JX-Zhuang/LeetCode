/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var ans = [];
    var backtrack = function (start, track) {
        ans.push(track.slice(0));
        for (var i = start; i < nums.length; i++) {
            track.push(nums[i]);
            backtrack(i + 1, track);
            track.pop();
        }
    };
    backtrack(0, []);
    return ans;
};  