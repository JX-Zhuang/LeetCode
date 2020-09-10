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
var widthOfBinaryTree = function (root) {
    var res = 0;
    var o = {};
    var dfs = function (node, depth, pos) {
        if (!node) return;
        if (o[depth] === undefined) {
            o[depth] = pos;
        }
        var n = pos - o[depth] + 1n;
        if (n > res) {
            res = n;
        }
        dfs(node.left, depth + 1n, pos * 2n);
        dfs(node.right, depth + 1n, pos * 2n + 1n);
    };
    dfs(root, 0n, 0n);
    return res;
};