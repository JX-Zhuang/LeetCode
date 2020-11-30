/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    var prevMap = new Map();
    prevMap.set(0, 1);
    var count = 0, prev = 0;
    for (var n of nums) {
        prev += n;
        if (prevMap.get(prev - k)) {
            count += prevMap.get(prev - k);
        }
        if (prevMap.get(prev)) {
            prevMap.set(prev, prevMap.get(prev) + 1);
        } else {
            prevMap.set(prev, 1);
        }
    }
    return count;
};
