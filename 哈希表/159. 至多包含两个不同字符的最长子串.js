/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    var m = {};
    var res = 0;
    for (var left = 0, right = 0; right < s.length; right++) {
        var item = s[right];
        m[item] = 1 || (m[item] + 1);
        while (Object.keys(m).length > 2) {
            var leftItem = s[left++];
            m[leftItem]--;
            if (m[leftItem] === 0) delete m[leftItem];
        }
        res = Math.max(right - left + 1, res);
    }
    return res;
};