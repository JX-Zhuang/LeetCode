/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var wordL = words[0].length;
    var strL = words[0].length * words.length;
    var m = {};
    for (var word of words) {
        if (!m.hasOwnProperty(word)) {
            m[word] = 0;
        }
        m[word]++;
    }
    var ans = [];
    for (var i = 0; i <= s.length - strL; i++) {
        var o = { ...m };
        var l = 0;
        var j = i;
        while (l < strL) {
            var ch = '';
            for (var h = 0; h < wordL; h++) {
                ch += s[h + j];
            }
            if (o[ch] > 0) {
                o[ch]--;
                l += wordL;
            } else {
                break;
            }
            j += wordL;
        }
        if (l === strL) ans.push(i);
    }
    return ans;
};