/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 与 297. 二叉树的序列化与反序列化 一样
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var str = '';
    var dfs = function (node) {
        if (!node) {
            str += 'null,';
            return;
        }
        str += `${node.val},`;
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var arr = data.split(',');
    var helper = function (arr) {
        var val = arr.shift();
        if (val == 'null') return null;
        var node = new TreeNode(Number(val));
        node.left = helper(arr);
        node.right = helper(arr);
        return node;
    };
    return helper(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */