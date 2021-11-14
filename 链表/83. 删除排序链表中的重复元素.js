/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var current, prev = head;
    while (prev && prev.next) {
        current = prev.next;
        if (prev.val === current.val) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
    }
    return head;
};