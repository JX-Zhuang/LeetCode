/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    var stack = [];
    for (var c of s) {
        if (c !== ')') {
            stack.push(c);
        } else {
            var temp = [];
            while (stack.length && stack[stack.length - 1] !== '(') temp.push(stack.pop());
            stack.pop();
            stack = stack.concat(temp);
        }
    }
    return stack.join('');
};