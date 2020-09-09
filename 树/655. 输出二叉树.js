/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var getLevel = function (node) {
    return node ? Math.max(getLevel(node.left), getLevel(node.right)) + 1 : 0;
}
var printTree = function (root) {
    var n = getLevel(root);
    var m = Math.pow(2, n) - 1;
    var res = [];
    for (var i = 0; i < n; i++) {
        res[i] = [];
        for (var j = 0; j < m; j++) {
            res[i].push('');
        }
    }
    var fill = function (node, i, l, r) {
        if (!node) return;
        var index = Math.floor((l + r) / 2);
        res[i][index] = node.val + '';
        fill(node.left, i + 1, l, index);
        fill(node.right, i + 1, index + 1, r);
    }
    fill(root, 0, 0, m);
    return res;
};


