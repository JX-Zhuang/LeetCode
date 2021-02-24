/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    var digitMapLetter = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    var ans = [];
    var backtrack = function (track, startIndex) {
        if (track.length === digits.length) {
            ans.push(track);
            return;
        }
        var num = digits[startIndex];
        for (var i of digitMapLetter[num]) {
            backtrack(track + i, startIndex + 1);
        }
    };
    backtrack('', 0);
    return ans;
};