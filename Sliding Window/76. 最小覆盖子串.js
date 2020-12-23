/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    var need = {}, window = {};
    for (var item of t) {
        if (!need.hasOwnProperty(item)) need[item] = 0;
        need[item]++;
    }
    var left = 0, right = 0;
    var valid = 0;
    var start = 0, len = Number.MAX_SAFE_INTEGER;
    while (right < s.length) {
        var c = s[right];
        right++;
        if (need.hasOwnProperty(c)) {
            if (!window.hasOwnProperty(c)) {
                window[c] = 0;
            }
            window[c]++;
            if (window[c] === need[c]) {
                valid++;
            }
        }
        while (valid === Object.keys(need).length) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            var d = s[left];
            left++;
            if (need.hasOwnProperty(d)) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len);
};