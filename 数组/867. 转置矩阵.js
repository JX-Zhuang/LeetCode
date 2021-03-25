/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	var ans = [];
	var col = A[0].length;
	var row = A.length;
	for (var i = 0; i < col; i++) {
		var arr = [];
		for (var j = 0; j < row; j++) {
			arr.push(A[j][i]);
		}
		ans.push(arr);
	}
	return ans;
};
