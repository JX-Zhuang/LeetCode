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
var deepestLeavesSum = function (root) {
    var maxLevel = 0;
    var res = 0;
    var dfs = function (node, level) {
        if (!node) return;
        if (level > maxLevel) {
            maxLevel = level;
            res = node.val;
        } else if (maxLevel === level) {
            res += node.val;
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 1);
    return res;
};