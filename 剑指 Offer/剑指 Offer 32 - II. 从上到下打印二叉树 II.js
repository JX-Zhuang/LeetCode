/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 与 102.二叉树的层序遍历 一样
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    var helper = function(node,level){
        if(!node) return;
        if(!result[level]){
            result[level] = [];
        }
        result[level].push(node.val);
        helper(node.left,level+1);
        helper(node.right,level+1);
    };
    helper(root,0);
    return result;
};