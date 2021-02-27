/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	var ans = [];
	candidates.sort((a, b) => a - b);
	var backtrack = function(str, sum, start) {
		if (sum === target) {
			if (!ans.includes(str)) {
				ans.push(str);
			}
			return;
		}
		for (var i = start; i < candidates.length; i++) {
			var item = candidates[i];
			if (item > target) break;
			backtrack(str + '.' + item, sum + candidates[i], i + 1);
		}
	};
	backtrack('', 0, 0);
	return ans.map((item) => item.slice(1).split('.'));
};
