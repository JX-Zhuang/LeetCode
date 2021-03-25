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
var levelOrder = function (root) {
    var ans = [];
    if (!root) return [];
    var arr = [root];
    while (arr.length) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            var node = arr.shift();
            ans.push(node.val);
            node.left && arr.push(node.left);
            node.right && arr.push(node.right);
        }
    }
    return ans;
};