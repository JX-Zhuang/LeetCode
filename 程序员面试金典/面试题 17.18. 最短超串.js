/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */

var shortestSeq = function(big, small) {
	var ans = [];
	var left = 0,
		right = 0;
	var window = {};
	for (var item of big) window[item] = 0;
	var need = {};
	var count = 0;
	for (var item of small) {
		if (!need.hasOwnProperty(item)) {
			need[item] = 0;
			count++;
		}
		need[item]++;
	}
	var sum = 0;
	while (right < big.length) {
		var c = big[right];
		window[c]++;
        if (window[c] === need[c]) sum++;
		while (count === sum) {
			var d = big[left];
			if (ans.length === 0 || ans[1] - ans[0] > right - left) ans = [ left, right ];
			if (window[d] === need[d]) sum--;
			window[d]--;
			left++;
		}
		right++;
    }
	return ans;
};
shortestSeq([ 7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7 ], [ 1, 5, 9 ]);
