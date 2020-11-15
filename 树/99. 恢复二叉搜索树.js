/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    var arr = [];
    var helper = function (node) {
        if (!node) return;
        helper(node.left);
        arr.push(node);
        helper(node.right);
    };
    helper(root);
    var x, y;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].val > arr[i + 1].val) {
            x = arr[i + 1];
            if (!y) {
                y = arr[i];
            }
        }
    }
    if (x && y) {
        var temp = x.val;
        x.val = y.val;
        y.val = temp;
    }
};

var recoverTree = function(root) {
    var prev ,t1,t2;
    var helper = function(node){
        if(!node) return;
        helper(node.left);
        if(prev&&prev.val>node.val){
            if(!t1) t1 = prev;
            t2 = node;
        }
        prev = node;
        helper(node.right);
    };
    helper(root);
    var temp = t1.val;
    t1.val = t2.val;
    t2.val = temp;
};