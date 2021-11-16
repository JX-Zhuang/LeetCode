/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0, candidate = 0;
    for (const num of nums) {
        if (count == 0) candidate = num;
        if (candidate == num)++count;
        else --count;
    }
    count = 0;
    for (const num of nums) {
        if (candidate == num) count++;
    }
    return count * 2 > nums.length ? candidate : -1;
};