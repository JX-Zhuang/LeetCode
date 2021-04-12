/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    var ans = [];
    var num = {};
    var visited = {};
    for (var item of s) {
        if (!num.hasOwnProperty(item)) {
            num[item] = 0;
        }
        num[item]++;
    }
    for (var item of s) {
        if (!visited[item]) {
            while (ans.length && ans[ans.length - 1] > item) {
                if (num[ans[ans.length - 1]]) {
                    visited[ans.pop()] = false;
                } else {
                    break;
                }
            }
            visited[item] = true;
            ans.push(item);
        }
        num[item]--;
    }
    return ans.join('');
};