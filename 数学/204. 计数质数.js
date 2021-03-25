/**
 * @param {number} n
 * @return {number}
 */
var isPrime = function (n) {
    for (var i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
var countPrimes = function (n) {
    var count = 0;
    for (var i = 2; i < n; i++) {
        count += isPrime(i);
    }
    return count;
};
var countPrimes = function (n) {
    var prime = new Array(n).fill(1);
    var ans = 0;
    for (var i = 2; i < n; i++) {
        if (prime[i]) {
            ans++;
            for (var j = i * i; j < n; j += i) {
                prime[j] = 0;
            }
        }
    }
    return ans;
};