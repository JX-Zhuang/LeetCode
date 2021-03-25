/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
	var map = new Map();
	var wordDictSet = new Set(wordDict);
	var n = s.length;
	var helper = function(start) {
		if (map.has(start)) return map.get(start);
		if (start > n - 1) return [ [] ];
		const res = [];
		for (var i = start + 1; i <= n; i++) {
			var str = s.slice(start, i);
			if (wordDictSet.has(str)) {
				const ans = helper(i);
				for (var item of ans) {
					res.push([ str ].concat(item));
				}
			}
		}
		map.set(start, res);
		return res;
	};
	return helper(0).map((item) => item.join(' '));
};
