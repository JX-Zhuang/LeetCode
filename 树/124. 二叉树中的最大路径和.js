/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    var maxSum = Number.MIN_SAFE_INTEGER;
    var dfs = function (node) {
        if (!node) return 0;
        var left = Math.max(0, dfs(node.left));
        var right = Math.max(0, dfs(node.right));
        var sum = node.val + left + right;
        maxSum = Math.max(sum, maxSum);
        return node.val + Math.max(left, right);
    };
    dfs(root);
    return maxSum;
};