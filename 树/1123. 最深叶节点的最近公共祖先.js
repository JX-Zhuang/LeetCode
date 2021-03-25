/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
    var res, maxDepth = 0;
    var dfs = function (node, depth) {
        if (!node) return depth;
        depth++;
        var left = dfs(node.left, depth);
        var right = dfs(node.right, depth);
        depth = Math.max(left, right);
        if (left === right && depth >= maxDepth) {
            res = node;
            maxDepth = depth;
        }
        return depth;
    };
    dfs(root, 0);
    return res;
};