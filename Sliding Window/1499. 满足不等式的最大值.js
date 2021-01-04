/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
/**
 * i<j
 * yi + yj + |xi - xj|
 * yi + yj + xj - xi 
 * yi - xi + yj+xj
 * xj - xi<=k
 */
var findMaxValueOfEquation = function(points, k) {
	var ans = Number.MIN_SAFE_INTEGER;
	var dq = [ { index: 0, value: points[0][1] - points[0][0] } ];
	for (var i = 1; i < points.length; i++) {
		var item = points[i];
		while (dq.length && item[0] - points[dq[0].index][0] > k) dq.shift();
		if (dq.length) ans = Math.max(ans, dq[0].value + item[1] + item[0]);
		while (dq.length && item[1] - item[0] > dq[dq.length - 1].value) dq.pop();
		dq.push({
			index: i,
			value: item[1] - item[0]
		});
	}
	console.log(ans);
	return ans;
};
findMaxValueOfEquation([ [ 1, 3 ], [ 2, 0 ], [ 5, 10 ], [ 6, -10 ] ], 1);
findMaxValueOfEquation([ [ 0, 0 ], [ 3, 0 ], [ 9, 2 ] ], 3);
findMaxValueOfEquation(
	[
		[ -19, -12 ],
		[ -13, -18 ],
		[ -12, 18 ],
		[ -11, -8 ],
		[ -8, 2 ],
		[ -7, 12 ],
		[ -5, 16 ],
		[ -3, 9 ],
		[ 1, -7 ],
		[ 5, -4 ],
		[ 6, -20 ],
		[ 10, 4 ],
		[ 16, 4 ],
		[ 19, -9 ],
		[ 20, 19 ]
	],
	6
);
