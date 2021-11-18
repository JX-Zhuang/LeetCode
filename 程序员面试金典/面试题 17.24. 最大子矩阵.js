/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
    var ans = [], m = matrix.length, n = matrix[0].length, sum, max = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < m; i++) {
        sum = new Array(n).fill(0);
        for (var j = i; j < m; j++) {
            var start = 0, dp = 0;
            for (var k = 0; k < n; k++) {
                sum[k] += matrix[j][k];
                dp += sum[k];
                if (dp > max) {
                    ans = [i, start, j, k];
                    max = dp;
                }
                if (dp < 0) {
                    dp = 0;
                    start = k + 1;
                }
            }
        }
    }
    return ans;
};