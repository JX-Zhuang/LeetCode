/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    if(!tree) return [];
    var res = [];
    var arr = [tree];
    var level = 0;
    while(arr.length){
        var length = arr.length;
        var head = new ListNode(null);
        var temp = head;
        for(var i = 0;i<length;i++){
            var node = arr.shift();
            temp.next = new ListNode(node.val);
            temp = temp.next;
            if(node.left){
                arr.push(node.left);
            }
            if(node.right){
                arr.push(node.right);
            }
        }
        res[level++] = head.next;
        head = null;
    }
    return res;
};