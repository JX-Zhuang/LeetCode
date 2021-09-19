/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    const dp = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF));
    dp[0][src] = 0;
    for (let t = 1; t <= k + 1; t++) {
        for (const [i, j, cost] of flights) {
            dp[t][j] = Math.min(dp[t][j], dp[t - 1][i] + cost);
        }
    }
    let ans = INF;
    for (let t = 1; t <= k + 1; t++) {
        ans = Math.min(ans, dp[t][dst]);
    }
    return ans === INF ? -1 : ans;
};