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
var successor = function (root) {
    root = root.right;
    while (root.left) root = root.left;
    return root.val;
}
var predecessor = function (root) {
    root = root.left;
    while (root.right) root = root.right;
    return root.val;
}
var deleteNode = function (root, key) {
    if (!root) return root;
    if (root.val > key) root.left = deleteNode(root.left, key);
    else if (root.val < key) root.right = deleteNode(root.right, key);
    else {
        if (!root.left && !root.right) return null;
        else if (root.right) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};