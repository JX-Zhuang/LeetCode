/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    var sums = [0];
    for (var i of A) {
        var prev = sums[sums.length - 1];
        sums.push(prev + i);
    }
    var result = A.length + 1;
    for (var i = 0; i < A.length; i++) {
        for (var j = i + 1; j < A.length + 1; j++) {
            if (sums[j] - sums[i] >= K) {
                result = Math.min(result, j - i);
            }
        }
    }
    return result > A.length ? -1 : result;
};