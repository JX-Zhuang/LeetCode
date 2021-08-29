/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
    var result = new Array(6).fill(1 / 6);
    for (var i = 2; i <= n; i++) {
        var arr = new Array(5 * i + 1).fill(0);
        for (var j = 0; j < result.length; j++) {
            for (var k = 0; k < 6; k++) {
                arr[j + k] += result[j] / 6;
            }
        }
        result = arr;
    }
    return result;
};