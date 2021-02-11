/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function(n) {
	if (n <= 1) return 0;
	if (n <= 11) return 1;
	var a = 0,
		b = 0,
		ans = 0;
	for (var i = 1; i <= n; i *= 10) {
		a = n / i;
		b = parseInt(n % i);
		ans += parseInt((a + 7) / 10) * i + (parseInt(a % 10) === 2) * (b + 1);
	}
	return ans;
};
