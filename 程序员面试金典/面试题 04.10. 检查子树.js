/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
    if (!t1) return t2 == null;
    return dfs(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
};
var dfs = function (t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.val != t2.val) return false;
    return dfs(t1.left, t2.left) || dfs(t1.right, t2.right);
}