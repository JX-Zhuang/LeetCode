/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
    var map = {};
    for (var word of words) {
        var bits = getBits(word);
        map[bits] = map[bits] || 0;
        map[bits]++;
    }
    var res = new Array(puzzles.length).fill(0);
    for (var i = 0; i < puzzles.length; i++) {
        var puzzleBits = getBits(puzzles[i]);
        var first = getBits(puzzles[i][0]);
        var n = puzzleBits;
        while (n > 0) {
            if ((n & first) != 0 && map[n] > 0) {
                res[i] += map[n];
            }
            n = (n - 1) & puzzleBits;
        }
    }
    return res;
};
var getBits = function (word) {
    var res = 0;
    for (var i = 0; i < word.length; i++) {
        var n = word[i].charCodeAt() - 97;
        var status = 1 << n;
        res = res | status;
    }
    return res;
}