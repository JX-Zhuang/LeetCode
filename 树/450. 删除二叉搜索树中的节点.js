/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var getMin = function (node) {
    node = node.right;
    while (node.left) node = node.left;
    return node.val;
}
var getMax = function (node) {
    node = node.left;
    while (node.right) node = node.right;
    return node.val;
}
var deleteNode = function (root, key) {
    if (!root) return null;
    if (root.val > key) root.left = deleteNode(root.left, key);
    else if (root.val < key) root.right = deleteNode(root.right, key);
    else {
        if (!root.right && !root.left) return null;
        if (root.right) {
            root.val = getMin(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = getMax(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};