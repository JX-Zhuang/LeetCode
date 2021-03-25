/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var need = {}, window = {};
    for (var s of s1) {
        if (!need.hasOwnProperty(s)) need[s] = 0;
        need[s]++;
    }
    var left = 0, right = 0;
    var valid = 0;
    while (right < s2.length) {
        var s = s2[right++];
        if (need.hasOwnProperty(s)) {
            if (!window.hasOwnProperty(s)) {
                window[s] = 0;
            }
            window[s]++;
            if (window[s] === need[s]) {
                valid++;
            }
        }
        while (right - left >= s1.length) {
            if (valid === Object.keys(need).length) return true;
            var c = s2[left++];
            if (need.hasOwnProperty(c)) {
                if (window[c] === need[c]) {
                    valid--;
                }
                window[c]--;
            }
        }
    }
    return false;
};