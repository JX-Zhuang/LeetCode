/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    var max = Math.max(...nums);
    var arr = new Array(max + 1).fill(0);
    for (var item of nums) {
        arr[item] += item;
    }
    var current = 0, prev = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = current;
        current = Math.max(current, prev + arr[i]);
        prev = temp;
    }
    return current;
};