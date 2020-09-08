/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
    if (d <= 1) {
        var node = new TreeNode(v);
        node.left = root;
        return node;
    }
    var dfs = function (node, level) {
        if (!node) return null;
        var left = node.left, right = node.right;
        if (level === d - 1) {
            node.left = new TreeNode(v);
            node.left.left = left;
            node.right = new TreeNode(v);
            node.right.right = right;
            return;
        }
        dfs(left, level + 1);
        dfs(right, level + 1);
    };
    dfs(root, 1);
    return root;
};