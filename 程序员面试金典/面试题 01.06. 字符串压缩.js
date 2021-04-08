/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    var i = 0;
    var ans = '';
    while (i !== S.length) {
        for (var j = i; j < S.length && S[j] === S[j + 1]; j++);
        var count = j - i + 1;
        ans += S[i] + count;
        i += count;
    }
    return ans.length >= S.length ? S : ans;
};