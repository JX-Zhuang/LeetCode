/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    var nums = {};
    for (var i of answers) {
        var item = i + 1;
        if (!nums.hasOwnProperty(item)) nums[item] = 0;
        nums[item]++;
    }
    return Object.keys(nums).reduce((prev, current) => {
        var num = Math.ceil(nums[current] / current) * current;
        return num + prev;
    }, 0);
};
var numRabbits = function (answers) {
    var nums = {};
    var result = 0;
    for (var item of answers) {
        if (nums[item]) {
            nums[item]--;
        } else {
            nums[item] = item;
            result += item + 1;
        }
    }
    return result;
};