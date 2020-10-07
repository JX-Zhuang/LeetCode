/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    var stack = [Number.MAX_SAFE_INTEGER];
    var res = 0;
    for (var v of arr) {
        while (stack.length >= 1 && stack[stack.length - 1] < v) {
            res += stack.pop() * Math.min(stack[stack.length - 1], v);
        }
        stack.push(v);
    }
    while (stack.length > 2) res += stack.pop() * stack[stack.length - 1];
    return res;
};