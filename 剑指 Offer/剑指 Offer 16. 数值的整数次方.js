/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    var helper = function (x, n) {
        if (n === 0) return 1;
        if (n === 1) return x;
        var m = Math.floor(n / 2);
        return helper(x, m) * helper(x, m) * (n % 2 ? x : 1);
    }
    return n < 0 ? 1 / helper(x, -1 * n) : helper(x, n);
};