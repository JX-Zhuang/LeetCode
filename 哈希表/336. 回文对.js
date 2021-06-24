/**
 * @param {string[]} words
 * @return {number[][]}
 */
var isPalidrome = function (word) {
    var left = 0, right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) return false;
        left++;
        right--;
    }
    return true;
}
var palindromePairs = function (words) {
    var ans = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (i !== j && isPalidrome(words[i] + words[j])) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
};