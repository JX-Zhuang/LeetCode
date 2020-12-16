/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    var arr = nums.flat();
    if (r * c !== arr.length) return nums;
    var ans = [];
    for (var i = 0; i < r; i++) {
        var subArr = [];
        for (var j = 0; j < c; j++) {
            subArr.push(arr[i * c + j]);
        }
        ans.push(subArr);
    }
    return ans;
};