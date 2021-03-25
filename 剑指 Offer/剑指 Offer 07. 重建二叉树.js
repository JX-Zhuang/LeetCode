/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 与 105. 从前序与中序遍历序列构造二叉树 一样
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var o = {};
    var l = inorder.length;
    for(var index = 0;index<l;index++){
        o[inorder[index]] = index;
    }
    var constructTree = function(preLeft,preRight,inLeft,inRight){
        if(preLeft>preRight||inLeft>inRight) return null;
        var rootVal = preorder[preLeft];
        var root = new TreeNode(rootVal);
        var pIndex = o[rootVal];
        var newPreRight = preLeft+pIndex-inLeft;
        root.left = constructTree(preLeft+1,newPreRight,inLeft,pIndex-1);
        root.right = constructTree(newPreRight+1,preRight,pIndex+1,inRight);
        return root;
    };
    return constructTree(0,l-1,0,l-1);
};