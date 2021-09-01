/**
 * @param {number} n
 * @return {number}
 */
/**
 * n = 1234567
 * 1234000+567
 * 百位1的次数
 * 1234000:
 * n/1000*100
 * 567:
 * m = n%1000
 * m<100 =>0
 * 100<=m<200 =>m-100+1
 * m>=200 =>100
 * min(max(0,n%1000-100+1),100)
 * n/1000*100+min(max(0,n%1000-100+1),100)
 * n/10^(k+1)*10^k+min(max(0,n%10^(k+1)-10^k+1),10^k)
 */
var countDigitOne = function (n) {
    var result = 0;
    var mulk = 1;
    for (var k = 0; mulk <= n; k++) {
        result += Math.floor(n / (10 * mulk)) * mulk + Math.min(Math.max(0, n % (10 * mulk) - mulk + 1), mulk);
        mulk *= 10;
    }
    return result;
};