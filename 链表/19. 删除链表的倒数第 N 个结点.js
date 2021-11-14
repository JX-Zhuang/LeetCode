/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    var l = arr.length;
    if (n === l) return arr[1] ? arr[1] : null;
    if (n === 0) arr[l - 2].next = null;
    else arr[l - n - 1].next = arr[l - n].next;
    return arr[0];
};