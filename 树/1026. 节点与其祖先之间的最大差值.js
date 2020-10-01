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
var maxAncestorDiff = function (root) {
    var result = 0;
    var dfs = function (node, high, low) {
        if (!node) return null;
        result = Math.max(Math.max(Math.abs(node.val - high), Math.abs(node.val - low)), result);
        high = Math.max(node.val, high);
        low = Math.max(node.val, low);
        dfs(node.left, high, low);
        dfs(node.right, high, low);
    };
    dfs(root, root.val, root.val);
    return result;
};