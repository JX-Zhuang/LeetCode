/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var num = '0', ans = '', l1 = a.length, l2 = b.length;
    for (var i = l1 - 1, j = l2 - 1; i >= 0 || j >= 0; i-- , j--) {
        if (a[i] !== undefined && b[j] !== undefined) {
            if (a[i] === '1' && b[j] === '1') {
                ans = num + ans;
                num = '1';
            } else if (a[i] === '0' && b[j] === '0') {
                ans = num + ans;
                num = '0';
            } else {
                if (num === '1') {
                    ans = '0' + ans;
                    num = '1';
                } else {
                    ans = '1' + ans;
                }
            }
        } else {
            var n = a[i] === undefined ? b[j] : a[i];
            if (n === '0') {
                ans = num + ans;
                num = '0';
            } else {
                if (num === '1') {
                    ans = '0' + ans;
                    num = '1';
                } else {
                    ans = '1' + ans;
                }
            }
        }
    }
    if (num === '1') ans = num + ans;
    return ans;
};