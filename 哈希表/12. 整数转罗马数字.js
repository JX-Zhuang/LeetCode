/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var str = String(num);
    var l = str.length;
    var ans = '';
    var m = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM'
    };
    for (var i = 0; i < l; i++) {
        var item = str[i];
        var num = Math.pow(10, l - i - 1);
        var result = String(item * num);
        if (m[result]) {
            ans += m[result];
        } else {
            var n = Number(item);
            if (n > 5) {
                ans += m[5 * num];
                n -= 5;
            }
            for (var j = 0; j < n; j++) {
                ans += m[num];
            }
        }
    }
    return ans;
};