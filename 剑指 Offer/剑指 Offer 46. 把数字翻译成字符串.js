/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    var backtrack = function (num) {
        if (num.length === 1) return 1;
        if (num.length === 2) {
            if (num[0] === '0') return 1;
            if (Number(num) < 26) return 2;
            return 1;
        }
        if (num.length > 2) {
            if (num[num.length - 2] !== '0' && num.slice(-2) < 26) return backtrack(num.slice(0, num.length - 1)) + backtrack(num.slice(0, num.length - 2));
        }
        return backtrack(num.slice(0, num.length - 1));
    };
    return backtrack(String(num));
};