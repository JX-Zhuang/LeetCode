/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    var res = [];
    var deleteValue = new Set(to_delete);
    if (!deleteValue.has(root.val)) {
        res.push(root);
    }
    var dfs = function (node, parent, position) {
        if (!node) return;
        dfs(node.left, node, 'left');
        dfs(node.right, node, 'right');
        var needDelete = deleteValue.has(node.val);
        if (needDelete) {
            if (node.left) res.push(node.left);
            if (node.right) res.push(node.right);
            if (position === 'left') parent.left = null;
            if (position === 'right') parent.right = null;
        }
    };
    dfs(root, null, null);
    return res;
};