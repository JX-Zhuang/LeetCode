/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
	var ans = 0,
		q = [];
	for (var i = 0; i < A.length; i++) {
		if (q.length && q[0] + K === i) {
			q.shift();
		}
		if (q.length % 2 === A[i]) {
			if (i + K > A.length) return -1;
			ans++;
			q.push(i);
		}
	}
	return ans;
};
