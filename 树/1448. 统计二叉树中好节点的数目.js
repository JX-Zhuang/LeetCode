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
var goodNodes = function(root) {
    var result = 0;
    var dfs = function(node,max){
        if(!node) return;
        if(node.val>=max){
            max = node.val;
            result++;
        }
        dfs(node.left,max);
        dfs(node.right,max);
    }
    dfs(root,root.val);
    return result;
};