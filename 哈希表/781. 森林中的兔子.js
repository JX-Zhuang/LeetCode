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