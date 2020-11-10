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
var levelOrder = function (root) {
    if (!root) return [];
    var ans = [];
    var arr = [root];
    var level = 0;
    while (arr.length) {
        var length = arr.length;
        ans[level] = [];
        for (var i = 0; i < length; i++) {
            var node = arr.shift();
            if (level % 2 === 0) {
                ans[level].push(node.val);
            } else {
                ans[level].unshift(node.val);
            }
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
        level++;
    }
    return ans;
};