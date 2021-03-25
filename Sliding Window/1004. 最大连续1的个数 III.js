/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
	var window = { 0: 0, 1: 0 };
	var left = 0,
		right = 0;
	var res = 0;
	while (right < A.length) {
		var s = A[right++];
		window[s]++;
		if (window[0] > K) {
			var c = A[left++];
			window[c]--;
		}
		res = Math.max(res, right - left);
	}
	return res;
};