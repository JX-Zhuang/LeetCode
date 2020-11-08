/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 同 104. 二叉树的最大深度
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};