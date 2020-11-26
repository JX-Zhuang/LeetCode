/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    var arr = [];
    var dfs = function (node) {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    var build = function (l, r) {
        var mid = Math.floor((l + r) / 2);
        var node = new TreeNode(arr[mid]);
        if (l <= mid - 1) {
            node.left = build(l, mid - 1);
        }
        if (r >= mid + 1) {
            node.right = build(mid + 1, r);
        }
        return node;
    }
    return build(0, arr.length - 1);
};