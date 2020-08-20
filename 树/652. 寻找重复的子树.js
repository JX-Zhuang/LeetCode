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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    var o = {};
    var res = [];
    var dfs = function (node) {
        if (!node) return '';
        var id = String(node.val) + ',' + dfs(node.left) + ',' + dfs(node.right);
        if (o[id] == 1) {
            res.push(node);
        }
        if (id in o) {
            o[id]++;
        } else {
            o[id] = 1;
        }
        return id;
    }
    dfs(root);
    return res;
};