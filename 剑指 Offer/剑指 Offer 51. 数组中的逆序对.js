/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    return mergeSort(nums);
};
var mergeSort = function (arr) {
    var copy = [];
    var count = 0;
    var sort = function (arr, left, right) {
        if (right <= left) return;
        var mid = Math.floor((right + left) / 2);
        sort(arr, left, mid);
        sort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
    var merge = function (arr, left, mid, right) {
        for (var i = left; i <= right; i++) {
            copy[i] = arr[i];
        }
        var i = left, j = mid + 1;
        for (var k = left; k <= right; k++) {
            if (i > mid) arr[k] = copy[j++];
            else if (j > right) arr[k] = copy[i++];
            else if (copy[i] > copy[j]) {
                count += mid - i + 1;
                arr[k] = copy[j++];
            } else arr[k] = copy[i++];
        }
    }
    sort(arr, 0, arr.length - 1);
    return count;
}