/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    var o = {};
    var helper = function (node) {
        if (!node) return false;
        if (o[node.val]) return true;
        o[k - node.val] = true;
        return helper(node.left) || helper(node.right);
    }
    return helper(root);
};