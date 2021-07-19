/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1;
    var ans = 0;
    var edges = new Map();
    var visited = [];
    var dfs = function (index) {
        visited[index] = 1;
        if (edges.get(index)) {
            for (const e of edges.get(index)) {
                if (!visited[e]) {
                    dfs(e);
                }
            }
        }
    };
    for (const [x, y] of connections) {
        edges.get(x) ? edges.get(x).push(y) : edges.set(x, [y]);
        edges.get(y) ? edges.get(y).push(x) : edges.set(y, [x]);
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            ans++;
        }
    }
    return ans - 1;
};