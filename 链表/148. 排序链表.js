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
var merge = function (l1, l2) {
    var prevHead = new ListNode(null);
    var prev = prevHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    }
    prev.next = l1 ? l1 : l2;
    return prevHead.next;
};
var sortList = function (head) {
    if (!head) return head;
    var l = 0;
    var node = head;
    while (node) {
        l++;
        node = node.next;
    }
    var dummyNode = new ListNode(0, head);
    for (var subLength = 1; subLength < l; subLength <<= 1) {
        var prev = dummyNode, current = dummyNode.next;
        while (current) {
            var head1 = current;
            for (var i = 1; i < subLength && current.next; i++) {
                current = current.next;
            }
            var head2 = current.next;
            current.next = null;
            current = head2;
            for (var i = 1; i < subLength && current && current.next; i++) {
                current = current.next;
            }
            var next = null;
            if (current) {
                next = current.next;
                current.next = null;
            }
            var merged = merge(head1, head2);
            prev.next = merged;
            while (prev.next) {
                prev = prev.next;
            }
            current = next;
        }
    }
    return dummyNode.next;
};