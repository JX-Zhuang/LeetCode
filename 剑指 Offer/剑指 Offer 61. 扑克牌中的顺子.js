/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((a, b) => a - b);
    var j = 0;
    for (var i = 0; i < 4; i++) {
        if (nums[i] === 0) {
            j++;
            continue;
        }
        if (nums[i + 1] === nums[i]) return false;
    }
    return nums[4] - nums[j] < 5;
};