/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    var m = {};
    for (var i of s) {
        if (!m.hasOwnProperty(i)) m[i] = 0;
        m[i]++
    }
    var count = 0;
    for (var key in m) {
        if (m[key] % 2 !== 0) count++;
    }
    return count === 1 || count === 0;
};