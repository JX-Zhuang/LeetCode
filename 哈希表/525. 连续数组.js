/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    var m = new Map();
    var counter = 0;
    m.set(counter, -1);
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (num === 1) {
            counter++;
        } else {
            counter--;
        }
        if (m.has(counter)) {
            var index = m.get(counter);
            max = Math.max(max, i - index);
        } else {
            m.set(counter, i);
        }
    }
    return max;
};