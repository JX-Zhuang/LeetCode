/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    var arr = [];
    var index = 0;
    var dfs = function(node){
        if(!node) return;
        if(node.val!==voyage[index++]){
            arr = [-1];
            return;
        }
        if(index<voyage.length&&node.left&&node.left.val!==voyage[index]){
            arr.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }else{
            dfs(node.right);
            dfs(node.left);
        }
    };
    dfs(root);
    return arr;
};