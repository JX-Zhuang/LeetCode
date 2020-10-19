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
 * @param {number} target
 * @return {TreeNode}
 */
var isLeaf = function (node) {
    return !node.left && !node.right;
}
var removeLeafNodes = function (root, target) {
    var dfs = function (node) {
        if (!node) return;
        if (dfs(node.left)) {
            node.left = null;
        }
        if (isLeaf(node) && node.val == target) {
            return true;
        }
        if (dfs(node.right)) {
            node.right = null;
        }
    };
    dfs(root);
    if (isLeaf(root) && root.val == target) return null;
    return root;
};