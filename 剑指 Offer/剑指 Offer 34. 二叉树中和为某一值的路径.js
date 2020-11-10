/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    var ans = [];
    var dfs = function (node, sums, s) {
        if (!node) return;
        var arr = [...sums, node.val];
        var newSum = s + node.val;
        if (!node.left && !node.right && newSum === sum) {
            ans.push([...arr]);
        }
        dfs(node.left, arr, newSum);
        dfs(node.right, arr, newSum);
    };
    dfs(root, [], 0);
    return ans;
}; ¸