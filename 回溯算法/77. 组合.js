/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var ans = [];
    var backtrack = function (start, track) {
        if (track.length === k) {
            ans.push(track);
            return;
        }
        for (var i = start; i <= n; i++) {
            backtrack(i + 1, track.concat(i));
        }
    }
    backtrack(1, []);
    return ans;
};