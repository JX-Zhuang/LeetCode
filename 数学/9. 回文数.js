/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x);
    var length = x.length;
    for (var i = 0; i < parseInt(length / 2); i++) {
        if (x[i] !== x[length - i - 1]) return false;
    }
    return true;
};
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    var ans = 0;
    while (ans < x) {
        ans = ans * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return x === ans || x === parseInt(ans / 10);
};