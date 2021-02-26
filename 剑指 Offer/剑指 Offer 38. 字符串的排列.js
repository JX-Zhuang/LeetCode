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
			if (indexs.includes(i)) continue;
			backtrack(track + s[i], indexs.concat(i));
		}
	};
	backtrack('', []);
	return [ ...new Set(ans) ];
};
