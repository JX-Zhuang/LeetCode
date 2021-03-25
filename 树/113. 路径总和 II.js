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
    var res = [];
    var dfs = function (root, sum, temp) {
        if (!root) return;
        temp.push(root.val);
        if (!root.left && !root.right && root.val === sum) {
            res.push([...temp]);
        }
        dfs(root.left, sum - root.val, temp);
        dfs(root.right, sum - root.val, temp);
        temp.pop();
    };
    dfs(root, sum, []);
    return res;
};