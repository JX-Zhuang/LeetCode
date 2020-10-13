/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    root.val = 0;
    var helper = function (node, parent, pos) {
        if (!node) return;
        if (pos == 'left') {
            node.val = 2 * parent + 1;
        } else {
            node.val = 2 * parent + 2;
        }
        helper(node.left, node.val, 'left');
        helper(node.right, node.val, 'right');
    };
    helper(root, -1);
    this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    var dfs = function (node) {
        if (!node) return false;
        if (node.val == target) return true;
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(this.root);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */