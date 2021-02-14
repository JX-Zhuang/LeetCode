/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function(matrix) {
	var n = matrix.length;
	var dp = new Array(n);
	var x = 0,
		y = 0,
		size = 0;
	for (var i = 0; i < n; i++) {
		dp[i] = [];
		for (var j = 0; j < n; j++) {
			if (matrix[i][j] === 0) {
				dp[i][j] = [ 1, 1 ];
				if (size === 0) {
					x = i;
					y = j;
					size = 1;
				}
			} else {
				dp[i][j] = [ 0, 0 ];
			}
		}
	}
	for (var i = 1; i < n; i++) {
		if (matrix[0][i] === 0) {
			dp[0][i][0] = dp[0][i - 1][0] + 1;
		}
	}
	for (var i = 1; i < n; i++) {
		if (matrix[i][0] === 0) {
			dp[i][0][1] = dp[i - 1][0][1] + 1;
		}
	}
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < n; j++) {
			if (matrix[i][j] === 0) {
				dp[i][j][0] = dp[i][j - 1][0] + 1;
				dp[i][j][1] = dp[i - 1][j][1] + 1;
				var temp = Math.min(dp[i][j][0], dp[i][j][1]);
				for (; temp > size; temp--) {
					if (dp[i - temp + 1][j][0] >= temp && dp[i][j - temp + 1][1] >= temp) {
						size = temp;
						x = i - temp + 1;
						y = j - temp + 1;
						break;
					}
				}
			}
		}
	}
	return size ? [ x, y, size ] : [];
};
