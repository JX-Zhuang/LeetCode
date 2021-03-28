/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    var m = 0;
    for (; n >= 5;) {
        n = parseInt(n / 5);
        m += n;
    }
    return m;
};