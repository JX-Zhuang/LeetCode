/**
 * 示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var left = 0, max = 0, windows = {};
    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        if (windows.hasOwnProperty(item)) {
            left = Math.max(left, windows[item] + 1);
        }
        max = Math.max(max, i - left + 1);
        windows[item] = i;
    }
    return max;
};