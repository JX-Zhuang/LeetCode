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
var distributeCoins = function (root) {
    var res = 0;
    var dfs = function (node) {
        if (!node) return 0;
        var l = dfs(node.left);
        var r = dfs(node.right);
        res += Math.abs(l) + Math.abs(r);
        return node.val + l + r - 1;
    };
    dfs(root);
    return res;
};