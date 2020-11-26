/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    for (var i = 1; i < numbers.length; i++) {
        var prev = numbers[i - 1];
        var next = numbers[i];
        if (next < prev) return next;

    }
    return numbers[0];
};