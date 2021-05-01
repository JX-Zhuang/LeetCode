/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var arrLast = function (arr) {
    return arr[arr.length - 1];
}
var shortestSubarray = function (A, K) {
    var sums = new Array(A.length + 1).fill(0);
    for (var i = 0; i < A.length; i++) {
        sums[i + 1] = sums[i] + A[i];
    }
    var result = A.length + 1;
    var queue = [];
    for (var i = 0; i < sums.length; i++) {
        while (queue.length && sums[i] <= sums[arrLast(queue)])
            queue.pop();
        while (queue.length && sums[i] - sums[queue[0]] >= K)
            result = Math.min(result, i - queue.shift());
        queue.push(i);
    }
    return result > A.length ? -1 : result;
};