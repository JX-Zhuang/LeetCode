/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
	var n = cost.length;
	var dp = new Array(n + 1).fill(0);
	dp[1] = cost[0];
	for (var i = 2; i <= n; i++) {
		dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i - 1];
	}
	return Math.min(dp[n], dp[n - 1]);
};
var minCostClimbingStairs = function(cost) {
	var n = cost.length;
	var prev = 0,
		current = cost[0];
	for (var i = 2; i <= n; i++) {
		var temp = current;
		current = Math.min(current, prev) + cost[i - 1];
		prev = temp;
	}
	return Math.min(prev, current);
};
