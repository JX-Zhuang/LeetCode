/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
	var map = {};
	var visited = {};
	for (var i = 0; i < n; i++) {
		map[i] = [];
	}
	for (var e of edges) {
		map[e[0]].push(e[1]);
		map[e[1]].push(e[0]);
	}
	var helper = function(index) {
		var selfOrChildHasApple = hasApple[index];
		visited[index] = true;
		for (var item of map[index]) {
			if (visited[item]) continue;
			selfOrChildHasApple = helper(item) || selfOrChildHasApple;
		}
		if (!selfOrChildHasApple) {
			delete map[index];
		}
		return selfOrChildHasApple;
	};
	helper(0);
	var size = Object.keys(map).length;
	return size ? 2 * (size - 1) : 0;
};
