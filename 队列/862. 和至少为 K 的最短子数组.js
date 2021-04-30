/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    var queue = [];
    var result = A.length + 1;
    var sum = 0;
    for (var num of A) {
        queue.push(num);
        sum += num;
        while (sum <= K) {
            if (sum === K) result = Math.min(result, queue.length);
            sum -= queue.shift();
        }
    }
    return result > A.length ? -1 : result;
};