/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    var ans = [];
    S = S.split("").sort();
    var backtrack = function (str, used) {
        if (str.length === S.length) {
            ans.push(str);
            return;
        }
        for (var i = 0; i < S.length; i++) {
            if (used[i]) continue;
            if (i > 0 && S[i] === S[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            backtrack(str + S[i], used);
            used[i] = false;
        }
    };
    backtrack('', {});
    return ans;
};