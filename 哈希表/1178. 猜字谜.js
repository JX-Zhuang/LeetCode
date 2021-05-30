/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
//  单词 word 中包含谜面 puzzle 的第一个字母。
//  单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
var isAnswer = function (word, puzzle) {
    var first = puzzle[0];
    if (!word.includes(first)) return false;
    var m = {};
    for (var ch of puzzle) {
        m[ch] = true;
    }
    for (var ch of word) {
        if (!m[ch]) return false;
    }
    return true;
}

var findNumOfValidWords = function (words, puzzles) {
    var ans = [];
    for (var p of puzzles) {
        var i = 0;
        for (var w of words) {
            if (isAnswer(w, p)) i++;
        }
        ans.push(i);
    }
    return ans;
};