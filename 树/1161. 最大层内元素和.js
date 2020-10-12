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
var maxLevelSum = function (root) {
    var res = [];
    var dfs = function (node, level) {
        if (!node) return;
        if (res[level] === undefined) {
            res[level] = 0;
        }
        res[level] += node.val;
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };
    dfs(root, 0);
    var maxIndex = 0;
    for (var i in res) {
        if (res[i] > res[maxIndex]) {
            maxIndex = i;
        }
    }
    return ++maxIndex;
};