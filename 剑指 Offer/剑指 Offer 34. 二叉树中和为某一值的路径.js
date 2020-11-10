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
        sums.push(node.val);
        var newSum = s + node.val;
        if (!node.left && !node.right && newSum === sum) {
            ans.push([...sums]);
        }
        dfs(node.left, sums, newSum);
        dfs(node.right, sums, newSum);
        sums.pop();
    };
    dfs(root, [], 0);
    return ans;
};