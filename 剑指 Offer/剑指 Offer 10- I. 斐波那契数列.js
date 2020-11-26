/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0 || n == 1) return n;
    var a1 = 0,a2 = 1 ,ans ;
    for(var i = 2;i<=n;i++){
        ans = (a1+a2) % 1000000007;
        a1 = a2;
        a2 = ans;
    }
    return ans;
};