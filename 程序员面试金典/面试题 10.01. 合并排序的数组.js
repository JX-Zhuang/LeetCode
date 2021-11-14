/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    var i = m + n - 1;
    while (n != 0 && m != 0) {
        if (A[m - 1] > B[n - 1]) {
            A[i] = A[--m];
        } else {
            A[i] = B[--n];
        }
        i--;
    }
    if (n != 0) {
        for (var i = 0; i < n; i++) {
            A[i] = B[i];
        }
    }
};