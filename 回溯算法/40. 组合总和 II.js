var combinationSum2 = function (candidates, target) {
	var ans = [];
	candidates.sort((a, b) => a - b);
	var backtrack = function (sum, start, arr) {
		if (sum > target) return;
		if (sum === target) {
			ans.push(arr.slice(0));
			return;
		}
		for (var i = start; i < candidates.length; i++) {
			var item = candidates[i];
			var newSum = sum + candidates[i];
			if (start < i && item === candidates[i - 1]) continue
			arr.push(item);
			backtrack(newSum, i + 1, arr);
			arr.pop();
		}
	};
	backtrack(0, 0, []);
	return ans;
};
