/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
//  单词 word 中包含谜面 puzzle 的第一个字母。
//  单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
var isAnswer = function (word, puzzle, m) {
    var first = puzzle[0];
    if (!word.includes(first)) return false;
    for (var ch of word) {
        if (!m[ch]) return false;
    }
    return true;
}

var getStr = function (puzzle) {
    var str = puzzle[0];
    str += puzzle.slice(1).split("").sort().join('');
    return str;
}
var findNumOfValidWords = function (words, puzzles) {
    var ans = [];
    var m = {};
    var mapPuzzle = {};
    var mapWord = {};
    for(var word of words){
        const m = {};
        for(var w of word){
            m[w] = true;
        }
        mapWord[word] = m;
    }
    for (var puzzle of puzzles) {
        const m = {};
        for (var ch of puzzle) {
            m[ch] = true;
        }
        mapPuzzle[puzzle] = m;
    }
    for (var p of puzzles) {
        var i = 0;
        var str = getStr(p);
        if (m.hasOwnProperty(str)) {
            ans.push(m[str]);
            continue;
        }
        for (var w of words) {
            const first = p[0];
            let flag = true;
            if (!mapWord[w][first]) continue;
            for (var ch of w) {
                if (!mapPuzzle[p][ch]) {
                    flag = false;
                    break;
                }
            }
            flag && i++;
        }
        m[str] = i;
        ans.push(i);
    }
    return ans;
};