/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var sum = 0, carry = 0, index1 = num1.length - 1, index2 = num2.length - 1;
    var result = new Array(Math.max(num1.length, num2.length)), i = result.length - 1;
    while (index1 >= 0 || index2 >= 0) {
        var n1 = Number(num1[index1--]), n2 = Number(num2[index2--]);
        sum = carry + (n1 ? n1 : 0) + (n2 ? n2 : 0);
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        result[i--] = sum;
    }
    if (carry > 0) result.unshift(carry);
    return result.join('');
};