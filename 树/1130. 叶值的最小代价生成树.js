/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    var stack = [Number.MAX_SAFE_INTEGER];
    var res = 0;
    for (var n of arr) {
        while (stack[stack.length - 1] < n) res += stack.pop() * Math.min(stack[stack.length - 1], n);
        stack.push(n);
    }
    while (stack.length > 2) res += stack.pop() * stack[stack.length - 1];
    return res;
};