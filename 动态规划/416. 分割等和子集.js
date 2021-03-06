/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	var sum = nums.reduce((a, b) => a + b, 0);
	if (sum % 2 === 1) return false;
	var half = sum / 2;
	var n = nums.length;
	var dp = Array.from(new Array(n), () => new Array(half + 1).fill(false));
	dp[0][0] = true;
	for (var i = 1; i < nums.length; i++) {
		for (var j = 0; j <= half; j++) {
			if (j < nums[i - 1]) {
				dp[i][j] = dp[i - 1][j];
			} else {
				dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
			}
		}
	}
	return dp[n - 1][half];
};

var canPartition = function (nums) {
	var sum = nums.reduce((a, b) => a + b, 0);
	if (sum % 2 === 1) return false;
	var half = sum / 2;
	var dp = new Array(half + 1).fill(false);
	dp[0] = true;
	for (var i = 1; i < nums.length; i++) {
		for (var j = half; j >= nums[i - 1]; j--) {
			dp[j] = dp[j] || dp[j - nums[i - 1]];
		}
	}
	return dp[half];
};
