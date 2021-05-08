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
    var used = {};
    for (var i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            var sum1 = nums[i] + nums[j];
            var m = {};
            var t = target - sum1;
            for (var h = j + 1; h < nums.length; h++) {
                console.log(h > j + 1)
                if (h > j + 1 && nums[h] === nums[h - 1]) continue;
                var item = nums[h];
                var key = t - item;
                if (key in m) {
                    var arr = [nums[i], nums[j], key, item];
                    result.push(arr);
                } else {
                    m[item] = h;
                }
            }
        }
    }
    return result;
};