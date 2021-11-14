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
    var prev = new ListNode(null,head),node = head;
    while(node){
        if(prev.val === node.val){
            prev.next = node.next;
            node = node.next;
        }
        node = node.next;
    }
    return head;
};