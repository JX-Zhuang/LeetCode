/**
 * @param {number[]} 
 * @param {number} K
 * @return {number}
 */
var atMostK = function (A, K) {
	var left = 0, right = 0;
	var window = {};
	var res = 0;
	var count = 0;
	for (var item of A) {
		window[item] = 0;
	}
	while (right < A.length) {
		var item = A[right++];
		window[item]++;
		if (window[item] === 1) count++;
		while (count > K) {
			var n = A[left++];
			window[n]--;
			if (window[n] === 0) {
				count--;
			}
		}
		res += right - left;
	}
	return res;
}
var subarraysWithKDistinct = function (A, K) {
	return atMostK(A, K) - atMostK(A, K - 1);
};
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
subarraysWithKDistinct([1, 2, 1, 3, 4], 3);
