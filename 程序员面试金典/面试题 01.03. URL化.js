/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
    var s = "";
    for (var i = 0; i < length; i++) {
        if (S[i] == ' ') {
            s += '%20';
        } else {
            s += S[i];
        }
    }
    return s;
};