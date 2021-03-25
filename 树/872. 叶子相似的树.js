/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    var r1 = [];
    var r2 = [];
    var helper = function (node, r) {
        if (!node) return;
        if (!node.left && !node.right) {
            r.push(node.val);
        }
        helper(node.left, r);
        helper(node.right, r);
    };
    helper(root1, r1);
    helper(root2, r2);
    if (r1.length != r2.length) return false;
    for (var i = 0; i < r1.length; i++) {
        if (r1[i] != r2[i]) return false;
    }
    return true;
};
var leafSimilar = function (root1, root2) {
    var helper = function (node, r) {
        if (!node) return r;
        if (!node.left && !node.right) {
            r += '/' + node.val;
        }
        return helper(node.left, helper(node.right, r));
    };
    return helper(root1, '') === helper(root2, '');
};