/**
 * @param {number} n
 * @return {boolean}
 */
var getNext = function (n) {
    var ans = 0;
    while (n > 0) {
        var a = n % 10;
        n = parseInt(n / 10);
        ans += a * a;
    }
    return ans;
}
var isHappy = function (n) {
    var m = {};
    while (!m[n] && n !== 1) {
        m[n] = true;
        n = getNext(n);
    }
    return n === 1;
};