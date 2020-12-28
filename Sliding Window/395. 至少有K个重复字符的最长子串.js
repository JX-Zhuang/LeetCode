/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
	var res = 0;
	for (var i = 1; i <= 26; i++) {
		res = Math.max(res, helper(s, k, i));
	}
	return res;
};
var helper = function(s, k, i) {
	var window = {};
	for (var item of s) window[item] = 0;
	var left = 0,
		right = 0;
	var count = 0,
		numsNoLessThanK = 0;
	while (right < s.length) {
		var c = s[right++];
		if (window[c]++ === 0) count++;
		if (window[c] === k) numsNoLessThanK++;
		while (count > i) {
			var d = s[left++];
			if (window[d]-- === k) numsNoLessThanK--;
			if (window[d] === 0) count--;
		}
		if (count === numsNoLessThanK) res = Math.max(res, right - left);
	}
	return res;
};
