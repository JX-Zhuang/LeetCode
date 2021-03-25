/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
	var window = {};
	var left = 0,
		right = 0;
	var res = 0,
		count = 0;
	for (var item of s) window[item] = 0;
	while (right < s.length) {
		var c = s[right++];
		window[c]++;
        count = Math.max(count, window[c]);
		if (right - left - count > k) {
			var d = s[left++];
			window[d]--;
		}
		res = Math.max(res, right - left);
    }
	return res;
};