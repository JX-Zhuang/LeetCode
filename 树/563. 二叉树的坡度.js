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
var findTilt = function (root) {
    var result = 0;
    var traverse = function (node) {
        if (!node) return 0;
        var left = traverse(node.left);
        var right = traverse(node.right);
        result += Math.abs(left - right);
        return left + right + node.val;
    };
    traverse(root);
    return result;
}