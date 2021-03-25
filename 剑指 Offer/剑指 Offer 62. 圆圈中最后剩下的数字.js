/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    var arr = new Array(n).fill(0).map((item, i) => i);
    var i = 0;
    while (n > 1) {
        i = (i + m - 1) % n;
        arr.splice(i, 1);
        n--;
    }
    return arr[0];
};
var lastRemaining = function (n, m) {
    var ans = 0;
    for(var i = 2;i<=n;i++){
        ans = (ans+m)%i;
    }
    return ans;
};
