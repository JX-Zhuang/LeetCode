/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var ans = [];
    var backtrack = function (track) {
        if (track.length === nums.length) {
            ans.push(track);
            return;
        }
        for (var item of nums) {
            if (track.includes(item)) continue;
            backtrack(track.concat(item));
        }
    };
    backtrack([]);
    return ans;
};