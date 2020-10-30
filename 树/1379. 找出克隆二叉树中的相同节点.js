/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
	var ans;
	var dfs = function(node) {
		if (!node) return;
		if (node.val === target.val) {
			ans = node;
			return;
		}
		dfs(node.left);
		dfs(node.right);
	};
	dfs(cloned);
	return ans;
};
