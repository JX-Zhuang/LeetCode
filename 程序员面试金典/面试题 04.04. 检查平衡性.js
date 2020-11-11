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
var height = function(root){
    if(!root) return 0;
    return Math.max(height(root.left),height(root.right)) + 1;
}
var isBalanced = function(root) {
    if(!root) return true;
    if(Math.abs(height(root.left) - height(root.right))>1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};