/**
 * @param {string} s
 * @return {number}
 */
var isPalindrome = function(start, end, s) {
	while (start <= end) {
		if (s[start] === s[end]) {
			start++;
			end--;
		} else {
			return false;
		}
	}
	return true;
};
var countSubstrings = function(s) {
	var n = s.length;
	var dp = new Array(n).fill(0);
	dp[0] = 1;
	for (var i = 1; i < n; i++) {
		var temp = 0;
		for (var j = 0; j <= i; j++) {
			temp += isPalindrome(j, i, s) ? 1 : 0;
		}
		dp[i] += dp[i - 1] + temp;
	}
	return dp[n - 1];
};
