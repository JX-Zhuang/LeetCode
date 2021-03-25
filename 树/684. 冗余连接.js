/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    var graph = {};
    var visited = [];
    var l = edges.length;
    var helper = function (edge) {
        var e0 = edge[0], e1 = edge[1];
        visited[e0] = 1;
        for (var i = 0; i < graph[e0].length; i++) {
            if (graph[e0][i] === e1) continue;
            if (dfs(graph[e0][i], e1)) {
                visited[e0];
                return true;
            }
        }
        visited[e0] = 0;
        return false;
    }
    var dfs = function (start, end) {
        visited[start] = 1;
        for (var i = 0; i < graph[start].length; i++) {
            var node = graph[start][i];
            if (visited[node] === 1) continue;
            if (node === end) {
                return true;
            } else {
                if (dfs(node, end)) {
                    return true;
                }
            }
        }
        visited[start] = 0;
        return false;
    }
    for (var edge of edges) {
        var e1 = edge[0], e2 = edge[1];
        if (!graph.hasOwnProperty(e1)) {
            graph[e1] = [];
        }
        if (!graph.hasOwnProperty(e2)) {
            graph[e2] = [];
        }
        graph[e1].push(e2);
        graph[e2].push(e1);
    }
    for (var i = l - 1; i >= 0; i--) {
        if (helper(edges[i])) {
            return edges[i];
        }
    }
    return [];
};
//   4
//   | \
// 7-9-10
//      |
//  1-5-8-3
//      |
//    2-6