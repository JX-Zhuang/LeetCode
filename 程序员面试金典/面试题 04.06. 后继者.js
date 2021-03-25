/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    var arr = [];
    var dfs = function (node) {
        if (!node) return;
        dfs(node.left);
        arr.push(node);
        dfs(node.right);
    };
    dfs(root);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == p) {
            return arr[i + 1] || null;
        }
    }
};

var inorderSuccessor = function (root, p) {
    if (!root) return null;
    if (p.val >= root.val) {
        return inorderSuccessor(root.right, p);
    }
    var left = inorderSuccessor(root.left, p);
    return left ? left : root;
};