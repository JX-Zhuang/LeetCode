/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var n = prices.length;
    var ans = 0;
    var min = prices[0];
    for (var i = 0; i < n; i++) {
        ans = Math.max(ans, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return ans;
};