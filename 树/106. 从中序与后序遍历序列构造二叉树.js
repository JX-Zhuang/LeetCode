/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    var o = {};
    var l = inorder.length;
    for (var i = 0; i < l; i++) {
        var val = inorder[i];
        o[val] = i;
    }
    var constructTree = function (inLeft, inRight, postLeft, postRight) {
        if (inLeft > inRight || postLeft > postRight) return null;
        var rootVal = postorder[postRight];
        var pIndex = o[rootVal];
        var root = new TreeNode(rootVal);
        var newPostRight = pIndex - 1 - inLeft + postLeft;
        root.left = constructTree(inLeft, pIndex - 1, postLeft, newPostRight);
        root.right = constructTree(pIndex + 1, inRight, newPostRight + 1, postRight - 1);
        return root;
    }
    return constructTree(0, l - 1, 0, l - 1);
};
/**
 * 中序遍历：
 * 左1左2左3     根          右1右2右3
 * inLeft    pIndex            inRight
 * pIndex-1-inLeft = x - postLeft;
 * x = pIndex-1-inLeft+postLeft;
 * 后序遍历：
 * 左1左2左3       右1右2右3        根
 * postLeft   x       postRight-1   postRight
 */