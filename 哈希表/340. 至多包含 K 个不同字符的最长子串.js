/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    var map = new Map();
    var ans = 0;
    for (var left = 0, right = 0; right < s.length; right++) {
        var item = s[right];
        map.set(item, (map.get(item) || 0) + 1);
        while (map.size > k) {
            var itemLeft = s[left++];
            map.set(itemLeft, map.get(itemLeft) - 1);
            if (map.get(itemLeft) === 0) map.delete(itemLeft);
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};