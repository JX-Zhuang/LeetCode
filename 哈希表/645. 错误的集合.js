/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    var m = new Set();
    var ans = [];
    for (var n of nums) {
        if (m.has(n)) {
            ans.push(n);
        }
        m.add(n);
    }
    var arr = new Array(nums.length).fill(0).map((_, i) => i + 1);
    for (var n of arr) {
        if (!m.has(n)) ans.push(n);
    }
    return ans;
};