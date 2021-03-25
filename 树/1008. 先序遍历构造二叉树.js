/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    var index = 0;
    var l = preorder.length;
    var dfs = function (low, high) {
        if (index === l) return null;
        var val = preorder[index];
        if (val < low || val > high) return null;
        index++;
        var node = new TreeNode(val);
        node.left = dfs(low, val);
        node.right = dfs(val, high);
        return node;
    }
    return dfs(Number.MIN_VALUE, Number.MAX_VALUE);
};