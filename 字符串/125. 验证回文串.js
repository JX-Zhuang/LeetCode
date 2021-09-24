/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var reg = /[0-9|a-z|A-Z]/;
    var left = 0, right = s.length - 1;
    while (left <= right) {
        while (left < right && !reg.test(s[left])) {
            left++;
        }
        while (left < right && !reg.test(s[right])) {
            right--;
        }
        if (s[left++].toLocaleLowerCase() !== s[right--].toLocaleLowerCase()) return false;
    }
    return true;
};