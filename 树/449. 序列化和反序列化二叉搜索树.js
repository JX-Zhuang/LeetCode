/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var res = '';
    var dfs = function(node){
        if(!node) return;
        res+=node.val+',';
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res.slice(0,res.length-1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arr = data.split(',');
    var helper = function(){
        var val = arr.shift();
        if(!val) return null;
        var node = new TreeNode(Number(val));
        var left = helper();
        var right = helper();
        node.left = helper();
        node.right = helper();
        return node;
    };
    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */