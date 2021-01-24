/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var current = 0, prev = 0;
    for (var i = 0; i < nums.length; i++) {
        var temp = current;
        current = Math.max(prev + nums[i], current);
        prev = temp;
    }
    return current;
};