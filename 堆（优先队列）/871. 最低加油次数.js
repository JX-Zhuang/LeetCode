/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    var n = stations.length;
    var dp = new Array(n + 1).fill(0);
    dp[0] = startFuel;
    for (var i = 0; i < n; i++) {
        for (var j = i; j >= 0; j--) {
            if (dp[j] >= stations[i][0]) {
                dp[j + 1] = Math.max(dp[j + 1], stations[i][1] + dp[j]);
            }
        }
    }
    for (var i = 0; i <= n; i++) {
        if (dp[i] >= target) return i;
    }
    return -1;
};