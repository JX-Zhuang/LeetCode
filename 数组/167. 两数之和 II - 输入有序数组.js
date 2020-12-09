/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var o = {};
    for (var i = 0; i < numbers.length; i++) {
        var item = numbers[i];
        var n = target - item;
        if (o.hasOwnProperty(n)) {
            return [o[n], i + 1];
        }
        o[item] = i + 1;
    }
};

var twoSum = function (numbers, target) {
    var left = 0, right = numbers.length - 1;
    while (left < right) {
        var sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        sum < target ? left++ : right--;
    }
};