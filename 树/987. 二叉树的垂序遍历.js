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
var verticalTraversal = function (root) {
    var arr = [];
    var dfs = function (node, x, y) {
        if (!node) return;
        arr.push({ x, y, val: node.val });
        dfs(node.left, x - 1, y + 1);
        dfs(node.right, x + 1, y + 1);
    };
    dfs(root, 0, 0);
    arr.sort((a, b) => {
        if (a.x != b.x) return a.x - b.x;
        if (a.y != b.y) return a.y - b.y;
        return a.val - b.val;
    });
    var res = [[]];
    var prev = arr[0].x;
    for (var item of arr) {
        if (prev != item.x) {
            prev = item.x;
            res.push([]);
        }
        res[res.length - 1].push(item.val);
    }
    return res;
};