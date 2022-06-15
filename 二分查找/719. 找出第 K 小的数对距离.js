/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    var n = nums.length, left = 0, right = nums[n - 1];
    while (left <= right) {
        var mid = (left + right) >> 1, count = 0;
        for (var i = 0, j = 0; j < n; j++) {
            while (nums[j] - nums[i] > mid) {
                i++;
            }
            count += j - i;
        }
        if (count >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};