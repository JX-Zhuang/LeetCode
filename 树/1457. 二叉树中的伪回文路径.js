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
var pseudoPalindromicPaths  = function(root) {
    if (root == null) return 0;
    var result = 0;
    var dfs = function(node,temp){
        temp ^= 1 << node.val;
        if(!node.left&&!node.right){
            if(temp==0||(temp&(temp-1))==0){
                result++;
            }
            return;
        }
        node.left && dfs(node.left,temp);
        node.right && dfs(node.right,temp);
    };
    dfs(root,0);
    return result;
};