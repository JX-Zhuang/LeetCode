/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    var map = new Map();
    for (var w of words) {
        var o = {};
        for (var ch of w) {
            if (!o.hasOwnProperty(ch)) {
                o[ch] = 0;
            }
            o[ch]++;
            var key = `${ch}_${o[ch]}`;
            map.set(key, (map.get(key) || 0) + 1);
        }
    }
    var max = words.length;
    var ans = [];
    for (var [_, count] of map) {
        if (count === max) {
            ans.push(_.split('_')[0]);
        }
    }
    return ans;
};
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    var ans = [];
    var str = words[0];
    for (var s of str) {
        if (words.every(w => w.includes(s))) {
            words = words.map(w => w.replace(s, ''));
            ans.push(s);
        }
    }
    return ans;
};