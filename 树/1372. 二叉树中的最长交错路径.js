/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
	var result = 0;
	var dfs = function(node, pos, dis) {
		if (!node) return;
		result = Math.max(result, dis);
		if (pos) {
			dfs(node.left, 0, dis + 1);
			dfs(node.right, 1, 1);
		} else {
			dfs(node.left, 0, 1);
			dfs(node.right, 1, dis + 1);
		}
	};
	dfs(root.left, 0, 1);
	dfs(root.right, 1, 1);
	return result;
};
