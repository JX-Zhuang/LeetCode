/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    var o = {};
    for (var i = 0; i <= s.length - 10; i++) {
        var item = s.substr(i, 10);
        o[item] = o[item] || 0;
        o[item]++;
    }
    var arr = [];
    for (var k in o) {
        if (o[k] > 1) arr.push(k);
    }
    return arr;
};