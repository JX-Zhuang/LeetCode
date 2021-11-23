/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    var min = result = new ListNode(), max = tempMax = new ListNode();
    while (head) {
        if (head.val < x) {
            min.next = new ListNode(head.val);
            min = min.next;
        } else {
            tempMax.next = new ListNode(head.val);
            tempMax = tempMax.next;
        }
        head = head.next;
    }
    min.next = max.next;
    return result.next;
};