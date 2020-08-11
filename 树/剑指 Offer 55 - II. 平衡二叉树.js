/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 与 110. 平衡二叉树 一样
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var height = function(node){
    if(!node) return 0;
    return Math.max(height(node.left),height(node.right))+1;
}
var isBalanced = function(root) {
    if(!root) return true;
    return Math.abs(height(root.left) - height(root.right))<2&&isBalanced(root.left)&&isBalanced(root.right);
};