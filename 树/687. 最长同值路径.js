/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    var ans = 0;
    var helper = function(root){
        if(!root) return 0;
        var left = helper(root.left);
        var right = helper(root.right);
        var leftCount = 0,rightCount = 0;
        if(root.left&&root.left.val === root.val){
            leftCount+=left+1;
        }
        if(root.right&&root.right.val === root.val){
            rightCount+=right+1;
        }
        ans = Math.max(ans,leftCount+rightCount);
        return Math.max(leftCount,rightCount);
    };
    helper(root);
    return ans;
};