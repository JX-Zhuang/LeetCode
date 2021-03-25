/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 与 538. 把二叉搜索树转换为累加树 一样
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    var sum = 0;
    var dfs = function (node) {
        if (!node) return null;
        dfs(node.right);
        sum += node.val;
        node.val = sum;
        dfs(node.left);
    };
    dfs(root);
    return root;
};