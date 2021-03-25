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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    var ans = 0;
    var dfs = function (node) {
        if (!node) return [];
        if (!node.left && !node.right) return [1];
        var res = [];
        var left = dfs(node.left);
        for (var d of left) {
            if (++d > distance) continue;
            res.push(d);
        }
        var right = dfs(node.right);
        for (var d of right) {
            if (++d > distance) continue;
            res.push(d);
        }
        for (var l of left) {
            for (var r of right) {
                ans += (l + r <= distance);
            }
        }
        return res;
    }
    dfs(root);
    return ans;
};