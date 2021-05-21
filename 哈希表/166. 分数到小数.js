/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return '0';
    var ans = [];
    if (numerator < 0 ^ denominator < 0) ans.push('-');
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    ans.push(Math.floor(numerator / denominator));
    var remainder = numerator % denominator;
    if (remainder === 0) return ans.join('');
    ans.push('.');
    var map = {};
    while (remainder !== 0) {
        if (map.hasOwnProperty(remainder)) {
            ans.splice(map[remainder], 0, '(');
            ans.push(')');
            break;
        }
        map[remainder] = ans.length;
        remainder *= 10;
        ans.push(Math.floor(remainder / denominator));
        remainder %= denominator;
    }
    return ans.join('');
};