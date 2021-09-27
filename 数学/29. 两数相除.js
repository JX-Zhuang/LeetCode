/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    var res = 0;
    var isNegative = true;
    if ((dividend <= 0 && divisor <= 0) || (dividend >= 0 && divisor >= 0)) isNegative = false;
    if (dividend < 0) dividend = -dividend;
    if (divisor < 0) divisor = -divisor;
    while (dividend >= divisor) {
        var a = divisor;
        var temp = 1;
        while (dividend - a >= a) {
            a += a;
            temp += temp;
        }
        res += temp;
        dividend -= a;
    }
    res = isNegative ? (0 - res) : res;
    if (res > 2147483647) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res;
};