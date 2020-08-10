/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 与 226. 翻转二叉树 一样
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return root;
    var left = mirrorTree(root.left);
    var right = mirrorTree(root.right);
    root.right = left;
    root.left = right;
    return root;
};