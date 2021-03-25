/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
    var ans = [[nums[0]]];
    for (var i = 1; i < nums.length; i++) {
        var item = nums[i];
        var prev = nums[i - 1];
        if (item - prev > 1) {
            ans.push([item]);
        } else {
            var last = ans[ans.length - 1];
            if (last.length !== 1) {
                last.pop();
            }
            last.push(item)
        }
    }
    return ans.map(item => item.length === 1 ? String(item) : `${item[0]}->${item[1]}`);
};