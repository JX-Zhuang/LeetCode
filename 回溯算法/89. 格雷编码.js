/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
	var l = Math.pow(2, n);
	var arr = Array.from(new Array(l), (i, index) => index);
	var ans;
	var backtrack = function(track) {
		if (track.length === l) {
			ans = track;
			return;
		}
		for (var i = 0; i < l; i++) {
			var num = arr[i];
			if (track.includes(num)) continue;
            console.log(i,track[track.length - 1])
			if (Math.abs(num - track[track.length - 1]) > 1) continue;
			backtrack(track.concat(num));
		}
	};
	backtrack([ 0 ]);
	return ans;
};
