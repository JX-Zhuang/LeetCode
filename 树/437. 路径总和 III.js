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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    var prevMap = new Map();
    prevMap.set(0, 1);
    var helper = function (node, prev) {
        if (!node) return 0;
        var count = 0;
        prev += node.val;
        if (prevMap.get(prev - sum)) {
            count += prevMap.get(prev - sum);
        }
        if (prevMap.get(prev)) {
            prevMap.set(prev, prevMap.get(prev) + 1);
        } else {
            prevMap.set(prev, 1);
        }
        count += helper(node.left, prev);
        count += helper(node.right, prev);
        prevMap.set(prev, prevMap.get(prev) - 1);
        return count;
    };
    return helper(root, 0);
};