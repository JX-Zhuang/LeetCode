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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    var res = root;
    var dfs = function (node) {
        if (!node) return { node: null, level: 0 };
        var l = dfs(node.left), r = dfs(node.right);
        if (l.level > r.level) return { node: l.node, level: l.level + 1 };
        if (l.level < r.level) return { node: r.node, level: r.level + 1 };
        return { node, level: l.level + 1 };
    }
    return dfs(root).node;
};