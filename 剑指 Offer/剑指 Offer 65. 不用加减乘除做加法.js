/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    while (b !== 0) {
        const c = (a & b) << 1;
        a ^= b;
        b = c;
    }
    return a;
};
/**
 * 2+3=5
 * 10+11=101
 * a b c d
 * 0 0 0 0
 * 1 0 1 0
 * 0 1 1 0
 * 1 1 0 1
 * a^b = c
 * a&b = d
 * if(d==0) c
 * else d<<1+c
 */