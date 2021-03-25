/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
	var ans = [];
	nums.sort((a, b) => a - b);
	var backtrack = function(arr, start) {
		ans.push(arr.slice(0));
		for (var i = start; i < nums.length; i++) {
			if (i !== start && nums[i] === nums[i - 1]) continue;
			arr.push(nums[i]);
			backtrack(arr, i + 1);
			arr.pop();
		}
	};
	backtrack([], 0);
	return ans;
};
