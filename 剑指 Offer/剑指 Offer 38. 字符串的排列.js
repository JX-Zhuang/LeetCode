/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
	var ans = [];
	var backtrack = function(track, indexs) {
		if (track.length === s.length) {
			ans.push(track);
			return;
		}
		for (var i = 0; i < s.length; i++) {
			if (indexs[i]) continue;
			indexs[i] = true;
			backtrack(track + s[i], indexs);
			indexs[i] = false;
		}
	};
	backtrack('', {});
	return [ ...new Set(ans) ];
};
