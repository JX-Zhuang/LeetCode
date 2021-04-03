/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num <= 1) return false;
    var ans = 0;
    for (var i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            ans += i;
            if (i * i != num) {
                ans += num / i
            }
        }
    }
    return ans - num === num;
};