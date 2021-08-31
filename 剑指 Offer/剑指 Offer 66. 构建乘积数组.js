/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    var result = new Array(a.length).fill(1);
    for (var i = 1; i < a.length; i++) {
        result[i] = result[i - 1] * a[i - 1];
    }
    var temp = 1;
    for (var i = a.length - 2; i >= 0; i--) {
        temp *= a[i + 1];
        result[i] *= temp;
    }
    return result;
};