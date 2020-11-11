/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
    if(!root) return null;
    var subRoot = convertBiNode(root.left);
    if(!subRoot){
        subRoot = root;
    }else{
        var tempRoot = subRoot;
        while(subRoot.right){
            subRoot = subRoot.right;
        }
        subRoot.right = root;
        subRoot = tempRoot;
    }
    root.left = null;
    root.right = convertBiNode(root.right);
    return subRoot;
};