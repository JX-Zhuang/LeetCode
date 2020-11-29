/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    var slow = head, fast = head;
    var t = 0;
    while (fast) {
        if (t >= k) slow = slow.next;
        fast = fast.next;
        t++;
    }
    return slow;
};