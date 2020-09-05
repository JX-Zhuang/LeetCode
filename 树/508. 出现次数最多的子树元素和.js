/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    if (!root) return [];
    var o = {};
    var res = [];
    var dfs = function (node) {
        if (!node) return 0;
        var left = dfs(node.left);
        var right = dfs(node.right);
        var sum = left + right + node.val;
        if (!(sum in o)) {
            o[sum] = 0;
        }
        o[sum]++;
        return sum;
    };
    dfs(root);
    var max = 0;
    for (var key in o) {
        max = Math.max(o[key], max);
    }
    for (var key in o) {
        if (max === o[key]) res.push(key);
    }
    return res;
};