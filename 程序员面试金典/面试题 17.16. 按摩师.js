/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
	var n = nums.length;
	if (n === 0) return 0;
	var dp = new Array(n).fill(0);
	dp[0] = nums[0];
	ans = dp[0];
	for (var i = 1; i < n; i++) {
		if (i === 1) {
			dp[i] = Math.max(dp[0], nums[1]);
		} else {
			dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
		}
		ans = Math.max(ans, dp[i]);
	}
	return ans;
};
