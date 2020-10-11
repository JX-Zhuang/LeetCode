/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
    var half = Math.floor(n / 2);
    var left = 0, right = 0;
    var dfs = function (node) {
        var leftNum = 0, rightNum = 0;
        if (!node) return 0;
        leftNum = dfs(node.left);
        rightNum = dfs(node.right);
        if (node.val === x) {
            left = leftNum;
            right = rightNum;
        }
        return leftNum + rightNum + 1;
    }
    dfs(root);
    if (left > half || right > half || (left + right) < half)
        return true;
    return false;
};