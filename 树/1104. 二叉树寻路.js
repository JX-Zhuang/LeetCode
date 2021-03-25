/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    var n = Math.floor(Math.log(label) / Math.log(2));
    var res = [];
    while (label > 1) {
        res.unshift(label);
        label = 3 * Math.pow(2, --n) - 1 - Math.floor(label / 2);
    }
    res.unshift(1);
    return res;
};
/**
 * left + right = label/2 + x;
 * left + right = 2^(n-1) + 2^n-1;
 *  x = l + r - label/2 = 2^(n-1) + 2^n-1 - label/2
 *    = 2^(n-1) + 2*2^(n-1) - 1 - label/2
 *    = 3*2^(n-1)-1-label/2
 */