/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var arr = new Array(n).fill(0).map((_, i) => i + 1 + '');
    var r3, r5;
    for (var i = 1; i <= n; i++) {
        r3 = i % 3, r5 = i % 5;
        if (r3 === 0 && r5 === 0) arr[i - 1] = "FizzBuzz";
        if (r3 === 0 && r5) arr[i - 1] = "Fizz";
        if (r3 && r5 === 0) arr[i - 1] = "Buzz";
    }
    return arr;
};