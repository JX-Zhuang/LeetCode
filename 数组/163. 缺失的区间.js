/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    if (nums.length === 0) {
        if (lower === upper) return [`${lower}`];
        return [`${lower}->${upper}`];
    }
    var ans = [];
    if (nums[0] > lower) {
        const max = nums[0] - 1;
        if (max === lower) ans.push(`${max}`);
        else ans.push(`${lower}->${max}`);
    }
    for (var i = 1; i < nums.length; i++) {
        const min = nums[i - 1] + 1;
        const max = nums[i] - 1;
        if (max < min) continue;
        if (min === max) ans.push(`${min}`);
        else ans.push(`${min}->${max}`);
    }
    if (nums[nums.length - 1] < upper) {
        const min = nums[nums.length - 1] + 1;
        if (min === upper) ans.push(`${min}`);
        else ans.push(`${min}->${upper}`);
    }
    return ans;
};