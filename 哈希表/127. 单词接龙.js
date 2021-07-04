/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    var graph = {};
    var wordSet = new Set();
    wordList.push(beginWord);
    for (var item of wordList) {
        wordSet.add(item);
    }
    for (var i = 0; i < wordList.length; i++) {
        var item = wordList[i];
        graph[item] = [];
        for (var j = 0; j < item.length; j++) {
            var str = item[j];
            for (var k = 97; k <= 122; k++) {
                var char = String.fromCharCode(k);
                if (char === str) continue;
                var newItem = item.substring(0, j) + char + item.substring(j + 1);
                if (wordSet.has(newItem)) graph[item].push(newItem);
            }
        }
    }
    var visited = new Set();
    var queue = [beginWord];
    var ans = 0;
    while (queue.length) {
        ans++;
        var l = queue.length;
        while (l) {
            var word = queue.shift();
            var wordList = graph[word];
            for (var i = 0; i < wordList.length; i++) {
                if (visited.has(wordList[i])) continue;
                queue.push(wordList[i]);
                visited.add(wordList[i]);
                if (wordList[i] === endWord) return ++ans;
            }
            l--;
        }
    }
    return 0;
};