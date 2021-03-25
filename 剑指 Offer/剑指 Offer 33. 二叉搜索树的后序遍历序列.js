/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    var stack = [];
    var root = Number.MAX_SAFE_INTEGER;
    for (var i = postorder.length - 1; i >= 0; i--) {
        if (postorder[i] > root) return false;
        while (stack.length && stack[stack.length - 1] > postorder[i])
            root = stack.pop();
        stack.push(postorder[i]);
    }
    return true;
};