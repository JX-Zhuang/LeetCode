/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
	var ans = [];
	var stack = [];
	for (var i = T.length - 1; i >= 0; i--) {
		while (stack.length !== 0 && T[stack[stack.length - 1]] <= T[i]) {
			stack.pop();
		}
		ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
		stack.push(i);
	}
	return ans;
};

