/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	var l = nums.length;
	var dp = new Array(l).fill(0);
	dp[0] = nums[0];
	var ans = dp[0];
	for (var i = 1; i < l; i++) {
		var t = dp[i - 1] + nums[i];
		dp[i] = t > nums[i] ? t : nums[i];
		ans = Math.max(dp[i], ans);
	}
	return ans;
};
