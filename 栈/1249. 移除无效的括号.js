/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    var stack = [];
    var m = {};
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (!stack.length) continue;
            m[stack.pop()] = true;
            m[i] = true;
        }
    }
    var ans = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === ')') {
            if (m[i]) {
                ans += s[i];
            }
        } else {
            ans += s[i];
        }
    }
    return ans;
};