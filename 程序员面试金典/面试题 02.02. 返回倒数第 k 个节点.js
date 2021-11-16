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
 * @return {number}
 */
var kthToLast = function (head, k) {
    var arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length - k].val;
};