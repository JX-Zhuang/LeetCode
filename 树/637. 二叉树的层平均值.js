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
var averageOfLevels = function (root) {
    var arr = [];
    var helper = function (node, level) {
        if (!node) return;
        if (!arr[level]) {
            arr[level] = {
                sum: 0,
                length: 0
            }
        }
        arr[level].sum += node.val;
        arr[level].length++;
        helper(node.left, level + 1);
        helper(node.right, level + 1);
    };
    helper(root, 0);
    var result = [];
    arr.forEach((item) => result.push(item.sum / item.length));
    return result;
};