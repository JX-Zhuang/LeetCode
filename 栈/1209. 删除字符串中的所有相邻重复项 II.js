/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    var stack = [];
    var lastS = '', num = 0;
    for (var i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (s[i] !== lastS) num = 0;
        num++;
        if (num === k) {
            while (num !== 0) {
                stack.pop();
                num--;
            }
        }
        lastS = stack[stack.length - 1];
    }
    return stack.join('');
};