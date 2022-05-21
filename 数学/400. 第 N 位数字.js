/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    var len = 1;
    while (9 * len * Math.pow(10, len - 1) < n) {
        n -= 9 * len * Math.pow(10, len - 1);
        len++;
    }
    var s = Math.pow(10, len - 1);
    s += Math.floor(n / len);
    n -= len * Math.floor(n / len);
    if (n === 0) return (s - 1) % 10;
    return Math.floor(s / Math.pow(10, len - n)) % 10;
};