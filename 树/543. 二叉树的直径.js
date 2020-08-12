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
var diameterOfBinaryTree = function (root) {
    var ans = 1;
    var depth = function (node) {
        if (!node) return 0;
        var left = depth(node.left);
        var right = depth(node.right);
        ans = Math.max(left + right + 1, ans);
        return Math.max(left, right) + 1;
    }
    depth(root);
    return ans - 1;
};