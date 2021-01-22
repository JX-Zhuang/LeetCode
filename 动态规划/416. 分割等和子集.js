/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	var sum = nums.reduce((a, b) => a + b, 0);
	if (sum % 2 === 1) return false;
	var half = sum / 2;
	var n = nums.length;
	var dp = Array.from(new Array(n), () => new Array(half).fill(false));
	for (var i = 1; i < nums.length; i++) {
		for (var j = 0; j <= half; j++) {
			dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
		}
	}
	return dp[n-1][half];
};
