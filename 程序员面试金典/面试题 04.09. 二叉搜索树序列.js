/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function (root) {
    if (!root) return [[]];
    var result = [];
    var dfs = function (node, q, path) {
        if (node.left) {
            q.push(node.left);
        }
        if (node.right) {
            q.push(node.right);
        }
        if (q.length === 0) {
            result.push(path);
            return;
        }
        for (var n of q) {
            dfs(n, q.filter(item => item != n), path.concat(n.val));
        }
    };
    dfs(root, [], [root.val]);
    return result;
};