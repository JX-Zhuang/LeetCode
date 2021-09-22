/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var a = x ^ y;
    var count = 0;
    while (a !== 0) {
        count += a % 2 & 1;
        a = a >> 1;
    }
    return count;
};