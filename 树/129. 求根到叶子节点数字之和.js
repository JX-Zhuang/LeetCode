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
var sumNumbers = function (root) {
    var helper = function (root, n) {
        if (!root) return 0;
        var temp = n * 10 + root.val;
        if (!root.left && !root.right) {
            return temp;
        }
        return helper(root.left, temp) + helper(root.right, temp);
    }
    return helper(root, 0);
};