/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) return 1;
    var a1 = 1, a2 = 2, result = n;
    for (var i = 3; i <= n; i++) {
        result = (a1 + a2) % 1000000007;
        a1 = a2;
        a2 = result;
    }
    return result
};