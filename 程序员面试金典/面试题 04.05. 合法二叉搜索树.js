/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    var arr = [];
    var dfs = function (node) {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
};
var isValidBST = function (root) {
    if (!root) return true;
    var helper = function (node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    };
    return helper(root.left, Number.MIN_SAFE_INTEGER, root.val) && helper(root.right, root.val, Number.MAX_SAFE_INTEGER);
};