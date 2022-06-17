/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i] !== 0) continue;
        var right = n - 1;
        while (i < right) {
            arr[right] = arr[--right];
        }
        i++;
    }
};