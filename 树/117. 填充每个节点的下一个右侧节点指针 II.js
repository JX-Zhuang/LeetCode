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
    var current,prev;
    var processChild = function(node){
        if(!node) return;
        if(prev){
            prev.next = node;
        }else{
            leftmost = node;
        }
        prev = node;
    };
    while(leftmost){
        prev = null;
        current = leftmost;
        leftmost = null;
        while(current){
            processChild(current.left);
            processChild(current.right);
            current = current.next;
        }
    }
    return root;
};