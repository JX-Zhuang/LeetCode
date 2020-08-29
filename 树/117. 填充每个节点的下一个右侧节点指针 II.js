/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    var leftmost = root;
    while(leftmost.left || leftmost.right){
        var head = leftmost;
        while(head){
            if(head.left){
                var leftNext = null;
                if(head.right){
                    leftNext = head.right;
                }else if(head.next){
                    leftNext = head.next.left || head.next.right;
                }
                head.left.next = leftNext;
            }
            if(head.right){
                var rightNext = null;
                if(head.next){
                    rightNext = head.next.left || head.next.right;
                }
                head.right.next = rightNext;
            }
            head = head.next;
        }
        leftmost = leftmost.left || leftmost.right;
    }
    return root;
};