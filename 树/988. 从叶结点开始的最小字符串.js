/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    var res = '';
    var dfs = function (node, str) {
        if (!node) return null;
        var newStr = str + String.fromCharCode(node.val + 97);
        if (node.left === null && node.right === null) {
            var arr = newStr.split('');
            arr.reverse();
            var s = arr.join('');
            if (res) {
                if (res > s) {
                    res = s;
                }
            } else {
                res = s;
            }
        }
        dfs(node.left, newStr);
        dfs(node.right, newStr);
    };
    dfs(root, '');
    return res;
};