/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var res = 0;
    for (var i = 0; i < 32 && n > 0; i++) {
        res |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return res >>> 0;
};