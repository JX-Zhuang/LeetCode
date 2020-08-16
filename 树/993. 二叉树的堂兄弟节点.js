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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    var getDepth = function (node, level, val) {
        if (!node) return;
        if (val == node.val) {
            return level;
        }
        return getDepth(node.left, level + 1, val) || getDepth(node.right, level + 1, val);
    }
    var getParent = function (node, val) {
        if (!node) return;
        if ((node.left && node.left.val == val) || (node.right && node.right.val == val)) return node;
        return getParent(node.left, val) || getParent(node.right, val);
    }
    var xDepth = getDepth(root, 0, x);
    var yDepth = getDepth(root, 0, y);
    if (xDepth != yDepth) return false;
    return getParent(root, x) != getParent(root, y);
};

var isCousins = function (root, x, y) {
    var depthMap = {};
    var parentMap = {};
    var dfs = function (node, parent) {
        if (!node) return;
        var val = node.val;
        if (!parent) {
            depthMap[val] = 0;
        } else {
            depthMap[val] = depthMap[parent.val] + 1;
        }
        parentMap[val] = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    };
    dfs(root, null);
    return depthMap[x] == depthMap[y] && parentMap[x] !== parentMap[y];
};