/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var getReduce = function(a, b) {
	return Math.abs(a.charCodeAt() - b.charCodeAt());
};
var equalSubstring = function(s, t, maxCost) {
	var left = 0,
		right = 0;
	var ans = 0;
	var current = 0;
	while (right < s.length) {
		var num = getReduce(s[right], t[right]);
		current += num;
		while (current > maxCost) {
			var n = getReduce(s[left], t[left]);
			current -= n;
			left++;
		}
		right++;
		ans = Math.max(right - left, ans);
	}
	return ans;
};
