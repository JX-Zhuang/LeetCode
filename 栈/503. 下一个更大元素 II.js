/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	var ans = [],
		stack = [];
	var n = nums.length,
		index;
	for (var i = 2 * n - 1; i >= 0; i--) {
		index = i % n;
		while (stack.length !== 0 && stack[stack.length - 1] <= nums[i]) {
			stack.pop();
		}
		ans[index] = stack.length === 0 ? -1 : stack[stack.length - 1];
		stack.push(nums[index]);
	}
	return ans;
};
