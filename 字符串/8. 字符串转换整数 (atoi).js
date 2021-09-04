/**
 * @param {string} str
 * @return {number}
 */
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var myAtoi = function (str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var s = str[i];
        if (s === ' ' && result === '') continue;
        if (s === '-' || s === '+') {
            if (result !== '') break;
            if (nums.includes(str[i + 1])) {
                s === '-' && (result += s);
                continue;
            } else {
                break;
            }
        }
        if (nums.includes(s)) {
            result += s;
        } else {
            break;
        }
        if (result < -2147483648) {
            result = -2147483648;
            break;
        }
        if (result > 2147483647) {
            result = 2147483647;
            break;
        }
    }
    return result === '' ? 0 : result;
};