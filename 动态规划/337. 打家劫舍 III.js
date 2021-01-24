/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    var helper = function (node) {
        if (!node) return [0, 0];
        var left = helper(node.left);
        var right = helper(node.right);
        var res = [];
        res[0] = node.val + left[1] + right[1];
        res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return res;
    };
    return Math.max(...helper(root));
};