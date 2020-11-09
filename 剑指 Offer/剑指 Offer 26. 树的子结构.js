/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    return (!(!A && B)) && !!B && (dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};
var dfs = function (A, B) {
    if (!B) return true;
    if (!A) return false;
    if (A.val === B.val) {
        return dfs(A.left, B.left) && dfs(A.right, B.right);
    }
    return false;
}