/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    var result = 10000;
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        var l = i + 1, r = nums.length - 1;
        while (l < r) {
            var sum = nums[i] + nums[l] + nums[r];
            if (sum == target) return sum;
            if (Math.abs(target - sum) < Math.abs(target - result)) result = sum;
            if (sum > target) {
                while (nums[r--] == nums[r]);
            } else {
                while (nums[l++] == nums[l]);
            }
        }
    }
    return result;
};

