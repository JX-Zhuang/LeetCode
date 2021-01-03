/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
	var ans = Number.MIN_SAFE_INTEGER;
	for (var i = 0; i < points.length - 1; i++) {
		for (var j = i + 1; j < points.length; j++) {
			var itemI = points[i],
				itemJ = points[j];
			var xi = itemI[0],
				yi = itemI[1];
			var xj = itemJ[0],
				yj = itemJ[1];
			if (Math.abs(xi - xj) <= k) {
				ans = Math.max(yi + yj + Math.abs(xi - xj), ans);
			} else {
				break;
			}
		}
	}
	return ans;
};
