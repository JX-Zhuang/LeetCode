/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var ans = [];
    candidates.sort((a, b) => a - b)
    var backtrack = function (sum, track, start) {
        if (sum > target) return;
        if (sum === target) {
            ans.push(track);
            return;
        }
        for (var i = start; i < candidates.length; i++) {
            var item = candidates[i];
            backtrack(sum + item, track.concat(item), i);
        }
    };
    backtrack(0, [], 0);
    return ans;
};