/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    var path = [];
    var pos = 0;
    while (pos < S.length) {
        var level = 0;
        while (S[pos] === '-') {
            level++;
            pos++;
        }
        var value = 0;
        while (!isNaN(S[pos])) {
            value += S[pos++];
        }
        var node = new TreeNode(value);
        if (level === path.length) {
            if (path.length) {
                path[path.length - 1].left = node;
            }
        } else {
            while (path.length !== level) {
                path.pop();
            }
            path[path.length - 1].right = node;
        }
        path.push(node);
    }
    return path[0];
};