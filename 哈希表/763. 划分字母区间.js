/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    var ans = [];
    var m = {};
    for (var i = 0; i < s.length; i++) {
        m[s[i]] = i;
    }
    var end = 0, start = 0;
    for (var i = 0; i < s.length; i++) {
        end = Math.max(end, m[s[i]]);
        if (end === i) {
            ans.push(end - start + 1);
            start = end + 1;
        }
    }
    return ans;
};