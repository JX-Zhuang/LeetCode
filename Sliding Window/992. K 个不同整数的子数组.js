/**
 * @param {number[]} 
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
	var window = {};
	var left = 0,
		right = 0;
	var res = 0;
	while (right < A.length) {
		var item = A[right++];
		if (!window.hasOwnProperty(item)) {
			window[item] = 0;
		}
        window[item]++;
		if (Object.keys(window).length === K) {
			res++;
			var n = A[left++];
			window[n]--;
			if (window[n] === 0) {
				delete window[n];
			}
		}
    }
    console.log(res)
	return res;
};
subarraysWithKDistinct([ 1, 2, 1, 2, 3 ], 2);
