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
var getStr = function (puzzle) {
    var str = puzzle[0];
    str += [...new Set(puzzle.slice(1).split(""))].sort().join('');
    return str;
}
var findNumOfValidWords = function (words, puzzles) {
    var ans = [];
    var m = {};
    for (var p of puzzles) {
        var i = 0;
        var str = getStr(p);
        if (m.hasOwnProperty(str)) {
            ans.push(m[str]);
            continue;
        }
        for (var w of words) {
            if (isAnswer(w, p)) i++;
        }
        m[str] = i;
        ans.push(i);
    }
    return ans;
};