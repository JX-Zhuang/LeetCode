/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
    var stack = [];
    for (var i = 0; i < A.length; i++) {
        if (!stack.length || A[stack[stack.length - 1]] > A[i]) {
            stack.push(i);
        }
    }
    var ans = 0;
    for (var i = A.length - 1; i >= 0; i--) {
        while (stack.length && A[stack[stack.length - 1]] <= A[i]) {
            ans = Math.max(ans, i - stack.pop());
        }
    }
    return ans;
};