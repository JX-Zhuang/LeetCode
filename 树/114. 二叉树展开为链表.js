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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    var current = root;
    while (current) {
        if (current.left) {
            var next = current.left;
            var prev = next;
            while (prev.right) {
                prev = prev.right;
            }
            prev.right = current.right;
            current.left = null;
            current.right = next;
        }
        current = current.right;
    }
};