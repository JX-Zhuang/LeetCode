/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        char = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let ans = '';
    while (num > 0) {
        if (num >= nums[0]) {
            ans += char[0];
            num -= nums[0];
        } else {
            nums.shift();
            char.shift();
        }
    }
    return ans;
};