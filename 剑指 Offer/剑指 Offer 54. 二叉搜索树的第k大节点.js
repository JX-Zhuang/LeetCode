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
 * @return {number}
 */
var kthLargest = function (root, k) {
    var res;
    var helper = function (root) {
        if (!root) return;
        helper(root.right);
        if (k == 0) return;
        if (--k == 0) res = root.val;
        helper(root.left);
    };
    helper(root);
    return res;
};