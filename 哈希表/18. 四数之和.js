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
    console.log(o)
    var result = [];
    for (var i = 0; i < nums.length - 3; i++) {
        var sum = nums[i];
        if (sum > target) break;
        for (var j = i + 1; j < nums.length - 2; j++) {
            sum += nums[j];
            if (sum > target) break;
            for (var h = j + 1; h < nums.length - 1; h++) {
                sum += nums[h];
                if (sum > target) break;
                if (o.hasOwnProperty(sum)) {
                    result.push([nums[i], nums[j], nums[h], o[sum]]);
                }
            }
        }
    }
    return result;
};