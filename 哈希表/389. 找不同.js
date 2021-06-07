/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var sMap = new Map();
    for (var item of s) {
        sMap.set(item, (sMap.get(item) || 0) + 1);
    }
    var tMap = new Map();
    for (var item of t) {
        tMap.set(item, (tMap.get(item) || 0) + 1);
    }
    for (var [key, value] of tMap) {
        if (value !== sMap.get(key)) return key;
    }
};