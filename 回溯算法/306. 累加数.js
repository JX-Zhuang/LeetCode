/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    var backtrack = function (start, sum, previous, count) {
        if (start === num.length) {
            return count >= 3;
        }
        var value = 0;
        for (var i = start; i < num.length; i++) {
            if (i > start && num[start] === '0') break;
            value = value * 10 + Number(num[i]);
            if (count >= 2) {
                if (sum > value) {
                    continue;
                } else if (sum < value) {
                    break;
                }
            }
            if (backtrack(i + 1, previous + value, value, count + 1)) {
                return true;
            }
        }
        return false;
    };
    return backtrack(0, 0, 0, 0);
};