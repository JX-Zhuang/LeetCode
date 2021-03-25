/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
	var coins = [ 1, 5, 10, 25 ];
	var dp = new Array(n + 1).fill(0);
	dp[0] = 1;
	for (var i = 0; i < coins.length; i++) {
		for (var j = coins[i]; j <= n; j++) {
			dp[j] = (dp[j] + dp[j - coins[i]]) % 1000000007;
		}
	}
	return dp[n];
};
