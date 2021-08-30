/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    var m = new Map();
    var node = head;
    var newHead = new Node(), prev = newHead;
    while (node) {
        prev.next = new Node(node.val, null, null);
        m.set(node, prev.next);
        prev = prev.next;
        node = node.next;
    }
    node = head;
    prev = newHead.next;
    while (node) {
        prev.random = m.get(node.random);
        node = node.next;
        prev = prev.next;
    }
    return newHead.next;
};