/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    var sStack = [];
    var tStack = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] == '#') {
            sStack.pop();
        } else {
            sStack.push(S[i]);
        }
    }
    for (var i = 0; i < T.length; i++) {
        if (T[i] == '#') {
            tStack.pop();
        } else {
            tStack.push(T[i]);
        }
    }
    if (sStack.length != tStack.length) return false;
    for (var i = 0; i < sStack.length; i++) {
        if (sStack[i] != tStack[i]) return false;
    }
    return true;
};