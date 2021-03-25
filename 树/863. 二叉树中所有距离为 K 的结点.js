/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    var res = [];
    var subtreeAdd = function (node, dist) {
        if (!node) return;
        if (dist === K) {
            res.push(node.val);
        } else {
            subtreeAdd(node.left, dist + 1);
            subtreeAdd(node.right, dist + 1);
        }
    }
    var dfs = function (node) {
        if (!node) return -1;
        if (node === target) {
            subtreeAdd(node, 0);
            return 1;
        }
        var l = dfs(node.left), r = dfs(node.right);
        if (l !== -1) {
            if (l === K) res.push(node.val);
            subtreeAdd(node.right, l + 1);
            return l + 1;
        }
        if (r !== -1) {
            if (r === K) res.push(node.val);
            subtreeAdd(node.left, r + 1);
            return r + 1;
        }
        return -1;
    }
    dfs(root);
    return res;
};