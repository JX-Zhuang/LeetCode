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
 * @return {number}
 */
var maxSumBST = function (root) {
    var max = 0;
    var dfs = function (node) {
        if (!node) return [true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
        var lArr = dfs(node.left);
        var rArr = dfs(node.right);
        if (!lArr[0] || !rArr[0] || node.val <= lArr[2] || node.val >= rArr[1]) {
            return [false, 0, 0, 0];
        }
        var minVal = node.left ? lArr[1] : node.val;
        var maxVal = node.right ? rArr[2] : node.val;
        var sum = lArr[3] + rArr[3] + node.val;
        max = Math.max(max, sum);
        return [true, minVal, maxVal, sum];
    };
    dfs(root);
    return max;
};