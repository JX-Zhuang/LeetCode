/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    var o = {};
    for (var n of nums) {
        o[target - n] = n;
    }
    var result = [];
    for (var i = 0; i < nums.length - 3; i++) {
        if (nums[i] > target) break;
        for (var j = i + 1; j < nums.length - 2; j++) {
            var sum1 = nums[i] + nums[j];
            if (sum1 > target) break;
            var m = {};
            var t = target - sum1;
            for (var h = j + 1; h < nums.length; h++) {
                var item = nums[h];
                if (item + sum1 > target) break;
                var key = t - item;
                if (key in m) {
                    result.push([nums[i], nums[j], key, item]);
                } else {
                    m[item] = h;
                }
            }
        }
    }
    return result;
};