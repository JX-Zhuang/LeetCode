/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    var maxStr = '';
    var start = 0;
    var end = 1;
    var str = '';
    while (end < s.length) {
        str = s.substring(start, end);
        if (s.substring(start + 1).indexOf(str) !== -1) {
            if ((end - start + 1) > maxStr.length) {
                maxStr = str;
            }
        } else {
            start++;
        }
        end++
    }
    return maxStr;
};