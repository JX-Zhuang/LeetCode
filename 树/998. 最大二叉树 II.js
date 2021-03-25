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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
    if (!root || root.val < val) {
        var tmp = new TreeNode(val);
        tmp.left = root;
        return tmp;
    }
    var right = insertIntoMaxTree(root.right, val);
    root.right = right;
    return root;
};