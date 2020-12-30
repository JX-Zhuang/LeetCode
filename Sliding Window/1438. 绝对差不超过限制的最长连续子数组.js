/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
	var left = 0;
	var min = [],
		max = [];
	var res = 0;
	for (var i = 0; i < nums.length; i++) {
		while (max.length && nums[max[max.length - 1]] <= nums[i]) max.pop();
		max.push(i);
		while (min.length && nums[min[min.length - 1]] >= nums[i]) min.pop();
		min.push(i);
		while (nums[max[0]] - nums[min[0]] > limit) {
			left = Math.min(max[0], min[0]) + 1;
			max[0] > min[0] ? min.shift() : max.shift();
		}
		res = Math.max(res, i - left + 1);
	}
	return res;
};
