/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    var length = arr[arr.length - 1] + k;
    var a = new Array(length).fill(0).map((_, index) => index + 1);
    for (var i = 0; i < a.length; i++) {
        if (!arr.includes(a[i])) {
            k--;
            if (k === 0) return a[i];
        }
    }
};

var findKthPositive = function (arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > k) break;
        k++;
    }
    return k;
};