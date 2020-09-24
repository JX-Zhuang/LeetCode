/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    var i = 0;
    var arr = [{ node: root, index: 1 }];
    while (i < arr.length) {
        var item = arr[i++];
        if (item.node) {
            arr.push({ node: item.node.left, index: item.index * 2 });
            arr.push({ node: item.node.right, index: item.index * 2 + 1 });
        }
    }
    return arr[i - 1].index === arr.length;
};