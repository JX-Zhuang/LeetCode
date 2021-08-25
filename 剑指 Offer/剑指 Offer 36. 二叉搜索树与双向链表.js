/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    var head, prev;
    if (!root) return root;
    var helper = function (root) {
        if (!root) return;
        helper(root.left);
        if (head) {
            prev.right = root;
            root.left = prev;
        } else {
            head = root;
        }
        prev = root;
        helper(root.right);
    }
    helper(root);
    prev.right = head;
    head.left = prev;
    return head;
};