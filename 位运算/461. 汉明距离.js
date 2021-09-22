/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var a = x ^ y;
    var count = 0;
    while (a !== 0) {
        var b = a % 2;
        a = a >> 1;
        if (b === 1) count++;
    }
    return count;
};