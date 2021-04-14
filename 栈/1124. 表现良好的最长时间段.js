/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    var ans = 0;
    var score = hours.map(h => h > 8 ? 1 : -1);
    var prevsum = [0];
    for (var i = 1; i <= hours.length; i++) {
        prevsum[i] = prevsum[i - 1] + score[i - 1];
    }
    var stack = [];
    for (var i = 0; i < prevsum.length; i++) {
        const last = stack[stack.length - 1];
        if (!stack.length || prevsum[i] < prevsum[last]) {
            stack.push(i);
        }
    }
    for (var i = prevsum.length - 1; i >= 0 && i > ans; i--) {
        while (stack.length && prevsum[stack[stack.length - 1]] < prevsum[i]) {
            ans = Math.max(ans, i - stack.pop());
        }
    }
    return ans;
};