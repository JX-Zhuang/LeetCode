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
var constructMaximumBinaryTree = function (nums) {
    return construct(nums, 0, nums.length);
};
var construct = function (nums, l, r) {
    if (l == r) return null;
    var maxIndex = findMaxIndex(nums, l, r);
    var node = new TreeNode(nums[maxIndex]);
    node.left = construct(nums, l, maxIndex);
    node.right = construct(nums, maxIndex + 1, r);
    return node;
}
var findMaxIndex = function (nums, l, r) {
    var index = l;
    for (var i = l; i < r; i++) {
        if (nums[i] > nums[index]) {
            index = i;
        }
    }
    return index;
}