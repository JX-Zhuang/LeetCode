/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    dfs(root, null);
    return root;
};
var dfs = function (root, next) {
    if (!root) return null;
    root.next = next;
    dfs(root.left, root.right);
    dfs(root.right, root.next ? root.next.left : null);
}
var connect = function (root) {
    if (!root) return null;
    var leftmost = root;
    while (leftmost.left) {
        var head = leftmost;
        while (head) {
            head.left.next = head.right;
            head.right.next = head.next ? head.next.left : null;
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
};