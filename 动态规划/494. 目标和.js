/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
	var count = 0;
	var helper = function(i, sum) {
		if (i === nums.length) {
			if (sum === S) {
				count++;
				return;
			}
		} else {
			helper(i + 1, sum + nums[i]);
			helper(i + 1, sum - nums[i]);
		}
	};
	helper(0, 0);
	return count;
};
