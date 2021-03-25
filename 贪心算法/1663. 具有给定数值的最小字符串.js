/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    var ans = new Array(n).fill('a');
    var bound = parseInt((k - n) / 25);
    var r = (k - n) % 25;
    if (n - bound >= 1) ans[n - bound - 1] = String.fromCharCode(r + 97);
    for (var i = n - bound; i < n; i++) {
        ans[i] = 'z';
    }
    return ans.join('');
};