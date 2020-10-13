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
    var map = { 0: true };
    root.val = 0;
    var helper = function (node, parent, pos) {
        if (!node) return;
        if (pos == 'left') {
            node.val = 2 * parent + 1;
        } else {
            node.val = 2 * parent + 2;
        }
        map[node.val] = true;
        helper(node.left, node.val, 'left');
        helper(node.right, node.val, 'right');
    };
    helper(root, -1);
    this.map = map;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return !!this.map[target];
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */