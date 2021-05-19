/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var wordL = words[0].length;
    var m = {};
    for (var word of words) {
        if (!m.hasOwnProperty(word)) {
            m[word] = 0;
        }
        m[word]++;
    }
    var ans = [];
    for (var i = 0; i < wordL; i++) {
        var tmp = {};
        var left = i, right = i, count = 0;
        while (right + wordL <= s.length) {
            var str = s.substr(right, wordL);
            if (!tmp.hasOwnProperty(str)) {
                tmp[str] = 0;
            }
            tmp[str]++;
            right += wordL;
            count++;
            if (!m[str]) m[str] = 0;
            while (tmp[str] > m[str]) {
                var strT = s.substr(left, wordL);
                count--;
                tmp[strT]--;
                left += wordL;
            }
            if (count === words.length) ans.push(left);
        }
    }
    return ans;
};