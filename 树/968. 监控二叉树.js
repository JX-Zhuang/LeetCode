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
var minCameraCover = function (root) {
    var dfs = function (node) {
        if (!node) return [Number.MAX_SAFE_INTEGER, 0, 0];
        var [la, lb, lc] = dfs(node.left);
        var [ra, rb, rc] = dfs(node.right);
        var a = lc + rc + 1;  //选中root，覆盖整棵树
        var b = Math.min(a, Math.min(la + rb, lb + ra)); //覆盖整棵树，无论root是否选中
        var c = Math.min(a, rb + lb); //覆盖左右子树，无论root是否选中
        return [a, b, c];
    };
    return dfs(root)[1];
};