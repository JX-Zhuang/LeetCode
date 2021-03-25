/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N == 0 || N == 1) return N;
    var a = 0, b = 1;
    for (var i = 2; i <= N; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
};