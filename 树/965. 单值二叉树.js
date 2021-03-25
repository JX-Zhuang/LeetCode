/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    var left = (root.left == null) || (root.val == root.left.val && isUnivalTree(root.left));
    var right = (root.right == null) || (root.val == root.right.val && isUnivalTree(root.right));
    return left && right;
};