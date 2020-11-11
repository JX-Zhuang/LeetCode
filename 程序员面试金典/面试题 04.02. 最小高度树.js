/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var dfs = function (l, r) {
        if (l > r) return null;
        var mid = (l + r) >> 1;
        var root = new TreeNode(nums[mid]);
        var left = dfs(l, mid - 1);
        var right = dfs(mid + 1, r);
        root.left = left;
        root.right = right;
        return root;
    };
    return dfs(0, nums.length - 1);
};