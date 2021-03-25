/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var o = [ 'a', 'e', 'i', 'o', 'u' ];
var check = function(o) {
	return o === 'a' || o === 'e' || o === 'i' || o === 'o' || o === 'u' ? 1 : 0;
};
var maxVowels = function(s, k) {
	var ans = 0;
	var count = 0;
	for (var i = 0; i < s.length; i++) {
		count += check(s[i]);
		if (i >= k) {
			count -= check(s[i - k]);
		}
		ans = Math.max(ans, count);
	}
	return ans;
};
