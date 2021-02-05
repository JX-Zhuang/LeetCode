/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	if (s[0] === '0') return 0;
	var n = s.length;
	var dp = new Array(n).fill(0);
	dp[0] = 1;
	for (var i = 1; i < n; i++) {
		if (s[i] === '0') {
			if (s[i - 1] === '1' || s[i - 1] === '2') {
				if (i === 1) {
					dp[i] = 1;
				} else {
					dp[i] = dp[i - 2];
				}
			} else return 0;
		} else {
			if (`${s[i - 1]}${s[i]}` > 26 || s[i - 1] === '0') {
				dp[i] = dp[i - 1];
			} else {
				if (i === 1) {
					dp[i] = dp[i - 1] + 1;
				} else {
					dp[i] = dp[i - 1] + dp[i - 2];
				}
			}
		}
	}
	return dp[n - 1];
};
