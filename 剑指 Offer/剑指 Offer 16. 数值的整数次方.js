/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    var result = 1;
    for (var i = n; i > 0; i = Math.floor(i / 2)) {
        if (i % 2) {
            result *= x;
        }
        x *= x;
    }
    return result;
};