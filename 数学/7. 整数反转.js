/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var max = 214748364;
    var min = -214748364;
    var res = 0;
    while (x) {
        var pop = x % 10;
        x = Number.parseInt(x / 10);
        if (res > max || (res === max && pop > 7)) return 0;
        if (res < min || (res === min && pop < -8)) return 0;
        res = res * 10 + pop;
    }
    return res;
};