/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
    var res = 0;
    var dfs = function (gpVal, pVal, node) {
        if (!node) return;
        if (gpVal % 2 == 0) {
            res += node.val;
        }
        dfs(pVal, node.val, node.left);
        dfs(pVal, node.val, node.right);
    };
    dfs(1, 1, root);
    return res;
};
// bfs
var sumEvenGrandparent = function (root) {
    var res = 0;
    var arr = [root];
    while (arr.length) {
        var node = arr.shift();
        if (node.val % 2 == 0) {
            if (node.left) {
                if (node.left.left) {
                    res += node.left.left.val;
                }
                if (node.left.right) {
                    res += node.left.right.val;
                }
            }
            if (node.right) {
                if (node.right.left) {
                    res += node.right.left.val;
                }
                if (node.right.right) {
                    res += node.right.right.val;
                }
            }
        }
        if (node.left) {
            arr.push(node.left);
        }
        if (node.right) {
            arr.push(node.right);
        }
    }
    return res;
};