/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    var m = new Map();
    var res = 0;
    for (var left = 0, right = 0; right < s.length; right++) {
        var item = s[right];
        m.set(item, (m.get(item) || 0) + 1);
        while (m.size > 2) {
            var leftItem = s[left++];
            m.set(leftItem, m.get(leftItem) - 1);
            if (m.get(leftItem) === 0) m.delete(leftItem);
        }
        res = Math.max(right - left + 1, res);
    }
    return res;
};