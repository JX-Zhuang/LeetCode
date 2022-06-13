/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    var count = 0, n = s.length, l = 0;
    for (var i = 0; i < n; i++) {
        if (s[i] === '(') {
            l++;
        } else if (s[i] === ')' && l > 0) {
            l--;
            count++;
        }
    }
    var result = new Set();
    var dfs = function (i, leftCount, rightCount, str) {
        if (leftCount < rightCount || leftCount > count || rightCount > count) return;
        if (i === n) {
            if (leftCount === count && rightCount === count) {
                result.add(str);
            }
            return;
        }
        if (s[i] === '(') {
            dfs(i + 1, leftCount + 1, rightCount, str + '(');
            dfs(i + 1, leftCount, rightCount, str);
        } else if (s[i] === ')') {
            dfs(i + 1, leftCount, rightCount + 1, str + ')');
            dfs(i + 1, leftCount, rightCount, str);
        } else {
            dfs(i + 1, leftCount, rightCount, str + s[i]);
        }
    }
    dfs(0, 0, 0, '');
    return [...result];
};