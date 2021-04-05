/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var head = new ListNode();
    var temp = head;
    var a = 0;
    while (l1 || l2) {
        var l1Val = 0;
        if (l1) {
            l1Val = l1.val;
            l1 = l1.next;
        }
        var l2Val = 0;
        if (l2) {
            l2Val = l2.val;
            l2 = l2.next;
        }
        var val = l1Val + l2Val + a;
        var a = parseInt(val / 10);
        var list = new ListNode(val % 10);
        temp.next = list;
        temp = list;
    }
    if (a) {
        temp.next = new ListNode(a);
    }
    return head.next;
};