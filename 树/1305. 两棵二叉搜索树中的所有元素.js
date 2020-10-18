/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    var dfs = function (node, arr) {
        if (!node) return;
        dfs(node.left, arr);
        arr.push(node.val);
        dfs(node.right, arr);
    }
    var arr1 = [], arr2 = [];
    dfs(root1, arr1);
    dfs(root2, arr2);
    return arr1.concat(arr2).sort((a, b) => a - b);
};