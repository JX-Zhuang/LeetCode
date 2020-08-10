/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s,t){
    if(!t) return true;
    if(!s) return false;
    return isSameTree(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t);
};
var isSameTree = function(s,t){
    if(!s&&!t) return true;
    if(!s||!t) return false;
    if(s.val!==t.val) return false;
    return isSameTree(s.left,t.left)&&isSameTree(s.right,t.right);
};