/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var stack = [];
    var ans = 0;
    for (var i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) break;
            const left = stack[stack.length - 1];
            const width = i - left - 1;
            const currentHeight = Math.min(height[left], height[i]) - height[top];
            ans += currentHeight * width;
        }
        stack.push(i);
    }
    return ans;
};