/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
    var o = {};
    var l = post.length;
    for (var i = 0; i < l; i++) {
        o[post[i]] = i;
    }
    var buildTree = function (leftPre, rightPre, leftPost, rightPost) {
        if (leftPre > rightPre || leftPost > rightPost) return null;
        var rootVal = pre[leftPre];
        var root = new TreeNode(rootVal);
        if (rightPre === leftPre) return root;
        var val = pre[leftPre + 1];
        var index = o[val];
        var newRightPre = index - leftPost + 1 + leftPre;
        root.left = buildTree(leftPre + 1, newRightPre, leftPost, index);
        root.right = buildTree(newRightPre + 1, rightPre, index + 1, rightPost - 1);
        return root;
    };
    return buildTree(0, l - 1, 0, l - 1);
};