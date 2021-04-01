/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) return false;
    if (A === B) return true;
    var oldA = A;
    while (true) {
        A = A.slice(1) + A[0];
        if (A === B) return true;
        if (oldA === A) return false;
    }
};