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
var maxProduct = function(root) {
	var getSum = function(node) {
		if (!node) return 0;
		return getSum(node.left) + getSum(node.right) + node.val;
	};
	var sum = getSum(root);
	var result = 0;
	var dfs = function(node) {
		if (!node) return 0;
		var current = dfs(node.left) + dfs(node.right) + node.val;
		if (current * (sum - current) > result * (sum - result)) {
			result = current;
		}
		return current;
	};
	dfs(root);
	return (result * (sum - result)) % 1000000007;
};
