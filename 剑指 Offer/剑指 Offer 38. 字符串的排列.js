/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
	var ans = [];
	var indexMap = {};
	for (var index in s) {
		indexMap[index] = s[index];
	}
	var backtrack = function(track) {
		if (track.length === s.length) {
			var a = '';
			for (var index of track) {
				a += indexMap[index];
			}
			ans.push(a);
			return;
		}
		for (var i = 0; i < s.length; i++) {
			if (track.includes(i)) continue;
			backtrack(track + i);
		}
	};
	backtrack('');
	return [ ...new Set(ans) ];
};
