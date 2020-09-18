/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    var l = 0;
    var getLevel = function(node,level){
        if(!node) return;
        if(node.val === target.val){
            l = level;
            return ;
        }
        getLevel(node.left,level+1);
        getLevel(node.right,level+1);
    }
    getLevel(root,0);
    var res = [];
    var dfs = function(node,level){
        if(!node) return;
        if(level === l + K ){
            res.push(node.val);
        }
        dfs(node.left,level+1);
        dfs(node.right,level+1);
    }
    dfs(root,0);
    return res;
};

    //    3
    //  5   1
    // 6 2 0 8
    //  7 4 