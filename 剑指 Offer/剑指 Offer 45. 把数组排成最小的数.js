/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    nums.sort((a, b) => {
        if (a === b) return 0;
        if (Number(`${a}${b}`) > Number(`${b}${a}`)) return 1;
        return -1;
    });
    return nums.join('');
};