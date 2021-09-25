/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    var str = countAndSay(n - 1);
    var ans = '';
    var l = str.length;
    var index = 0;
    while (index < l) {
        var count = 1;
        var char = str[index++];
        while (char === str[index]) {
            count++;
            index++;
        }
        ans += `${count}${char}`;
    }
    return ans;
};