/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
    var dp = new Array(N).fill(0),
        sz = new Array(N).fill(0),
        ans = new Array(N).fill(0),
        graph = new Array(N).fill(0).map(_ => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    var dfs1 = function (u, f) {
        dp[u] = 0;
        sz[u] = 1;
        for (const v of graph[u]) {
            if (v === f) continue;
            dfs1(v, u);
            dp[u] += dp[v] + sz[v];
            sz[u] += sz[v];
        }
    };
    var dfs2 = function (u, f) {
        ans[u] = dp[u];
        for (const v of graph[u]) {
            if (v === f) continue;
            const pu = dp[u], pv = dp[v];
            const su = sz[u], sv = sz[v];
            dp[u] -= dp[v] + sz[v];
            sz[u] -= sz[v];
            dp[v] += dp[u] + sz[u];
            sz[v] += sz[u];
            dfs2(v, u);
            dp[u] = pu;
            dp[v] = pv;
            sz[u] = su;
            sz[v] = sv;
        }
    }
    dfs1(0, -1);
    dfs2(0, -1);
    return ans;
};