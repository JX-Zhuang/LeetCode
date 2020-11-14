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
 * @return {number}
 */
var pathSum = function (root, sum) {
    var prevMap = { 0: 1 };
    var dfs = function (node, prev) {
        if (!node) return 0;
        var count = 0;
        prev += node.val;
        if (prevMap.hasOwnProperty(prev - sum)) {
            count += prevMap[prev - sum];
        }
        if (prevMap.hasOwnProperty(prev)) {
            prevMap[prev]++;
        } else {
            prevMap[prev] = 1;
        }
        count += dfs(node.left, prev);
        count += dfs(node.right, prev);
        prevMap[prev]--;
        return count;
    }
    const a = dfs(root, 0);
    return a;
};