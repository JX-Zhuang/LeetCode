/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
    if (A.length == 0) return;
    while (A.length != 1) {
        B.push(A.pop());
    }
    C.push(A.pop());
    while (B.length) {
        A.push(B.pop());
    }
    hanota(A, B, C);
};