/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    var start = 1;
    var count = 9;
    var digit = 1;
    while (n > count) {
        n -= count;
        start *= 10;
        digit++;
        count = 9 * start * digit;
    }
    var num = start + parseInt((n - 1) / digit);
    return String(num)[parseInt(n - 1) % digit];
};
/**
 *          个数   位数
 * 1-9      9      1*9      9*1*1
 * 10-99    90     2*90     9*10*2
 * 100-999  900    3*900    9*100*3
 * start-end 9*start 9*start*digit
 */