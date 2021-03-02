/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    var ans = [];
    var backtrack = function (arr) {
        if (arr.length === S.length) {
            ans.push(arr.join(''));
            return;
        }
        for (var i = 0; i < S.length; i++) {
            if (arr.includes(S[i])) continue;
            arr.push(S[i]);
            backtrack(arr);
            arr.pop();
        }
    };
    backtrack([]);
    return ans;
};