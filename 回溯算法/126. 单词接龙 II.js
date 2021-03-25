/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return [];
    var ans = [];
    var wordSet = new Set(wordList);
    var wordMap = new Map();
    var leveMap = new Map();
    var visited = new Set();
    var queue = [beginWord];
    var level = 0;
    var finised = false;
    leveMap.set(beginWord, 0);
    visited.add(beginWord);
    wordSet.add(beginWord);
    while (queue.length) {
        var length = queue.length;
        level++;
        for (var i = 0; i < length; i++) {
            var word = queue.shift();
            for (var j = 0; j < word.length; j++) {
                for (var k = 97; k <= 122; k++) {
                    var newWord = word.slice(0, j) + String.fromCharCode(k) + word.slice(j + 1);
                    if (!wordSet.has(newWord)) continue;
                    if (word === newWord) continue;
                    if (wordMap.has(word)) {
                        wordMap.get(word).add(newWord);
                    } else {
                        wordMap.set(word, new Set([newWord]));
                    }
                    if (visited.has(newWord)) continue;
                    leveMap.set(newWord, level);
                    visited.add(newWord);
                    if (newWord === endWord) finised = true;
                    queue.push(newWord);
                }
            }
        }
    }
    if (!finised) return [];
    var arr = [];
    var dfs = function (word) {
        if (word === endWord) {
            ans.push([beginWord].concat(arr.slice(0)));
            return;
        }
        var words = wordMap.get(word);
        for (var newWord of words) {
            if (leveMap.get(newWord) - 1 === leveMap.get(word)) {
                arr.push(newWord);
                dfs(newWord);
                arr.pop();
            }
        }
    }
    dfs(beginWord);
    return ans;
};