/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    var result = '', remainder;
    while (n) {
        remainder = n % 1000;
        n = Math.floor(n / 1000);
        if (n) {
            if (remainder < 10) {
                remainder = '00' + remainder;
            } else if (remainder < 100) {
                remainder = '0' + remainder;
            }
        }
        result = `${remainder}` + (result ? `.${result}` : '');
    }
    return result ? result : '0';
};