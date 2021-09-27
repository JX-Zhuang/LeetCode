/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b) {
        const c = (a & b) << 1;
        a = a ^ b;
        b = c;
    }
    return a;
};