/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    if (!head) return head;
    var s = new Set();
    var prev = head;
    s.add(prev.val);
    while (prev.next) {
        if (s.has(prev.next.val)) {
            prev.next = prev.next.next;
        } else {
            s.add(prev.next.val);
            prev = prev.next;
        }
    }
    return head;
};