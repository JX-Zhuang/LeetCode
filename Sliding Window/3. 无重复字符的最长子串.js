/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var window = {};
    var left = 0, right = 0;
    var res = 0;
    while (right < s.length) {
        var c = s[right++];
        if (!window.hasOwnProperty(c)) {
            window[c] = 0;
        }
        window[c]++;
        while (window[c] > 1) {
            var d = s[left++];
            window[d]--;
        }
        res = Math.max(res, right - left);
    }
    return res;
};