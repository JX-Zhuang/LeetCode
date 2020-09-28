/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    var res = '';
    var dfs = function(node,str){
        if(!node) return null;
        str+=node.val;
        if(node.left === null && node.right === null){
            var s = str.split('').reverse().join('');
            if(res){
                if(s<res){
                    res = s;
                }
            }else{
                res = s;
            }
        }
        dfs(node.left,str);
        dfs(node.right,str);
    };
    dfs(root,'');
    return res;
};