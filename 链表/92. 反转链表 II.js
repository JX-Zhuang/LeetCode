/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    var newHead = new ListNode(null, head);
    var prev = newHead;
    for (var i = 1; i < left; i++) {
        prev = prev.next;
    }
    var current = prev.next, next, prevHead = null, node = current;
    for (var i = 1; i <= right - left + 1; i++) {
        next = current.next;
        current.next = prevHead;
        prevHead = current;
        current = next;
    }
    node.next = current;
    prev.next = prevHead;
    return newHead.next;
};