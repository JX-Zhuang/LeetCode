/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    var n = stations.length;
    var dp = new Array(n).fill(0);
    dp[0] = startFuel;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            if (dp[i] >= stations[i][0]) {
                dp[i + 1] = Math.max(dp[i], stations[i][1] + dp[i]);
            }
        }
    }
    for (var i = 0; i <= n; i++) {
        if (dp[i] >= target) return i;
    }
    return -1;
};