/**
 * @param {string} s
 * @return {string}
 */
var getLength = function (s, start, end) {
    while (start >= 0 && s[start] === s[end] && end < s.length) {
        start--;
        end++;
    }
    return end - start - 1;
};
var longestPalindrome = function (s) {
    var l = 0, max = 0, start = 0;
    for (var i = 0; i < s.length; i++) {
        var l1 = getLength(s, i, i);
        var l2 = getLength(s, i, i + 1);
        l = Math.max(l1, l2);
        if (l > max) {
            start = i - Math.floor((l - 1) / 2);
            max = l;
        }
    }
    return s.substr(start, max);
};