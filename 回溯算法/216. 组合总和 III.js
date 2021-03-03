/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	var ans = [];
	var nums = Array.from(new Array(9), (i, index) => index + 1);
	var backtrack = function(sum, arr, start) {
		if (arr.length === k) {
			sum === n && ans.push(arr.slice(0));
			return;
		}
		for (var i = start; i < nums.length; i++) {
			arr.push(nums[i]);
			backtrack(sum + nums[i], arr, i + 1);
			arr.pop();
		}
	};
	backtrack(0, [], 0);
	return ans;
};
