/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    var prev = new ListNode();
    var newHead = prev;
    prev.next = head;
    var current = prev.next;
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return newHead.next;
};