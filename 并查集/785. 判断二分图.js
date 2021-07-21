/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    var obj = {};
    var n = graph.length;
    var uf = new UnionFind(n);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < graph[i].length; j++) {
            if (uf.isConnect(i, graph[i][j])) return false;
            uf.union(graph[i][0], graph[i][j]);
        }
    }
    return true;
};
class UnionFind {
    constructor(n) {
        this.parent = Array.from(new Array(n), (item, index) => index);
    }
    find(n) {
        while (n !== this.parent[n]) {
            this.parent[n] = this.parent[this.parent[n]];
            n = this.parent[n];
        }
        return n;
    }
    union(a, b) {
        const x = this.parent[a], y = this.parent[b];
        if (x === y) return;
        this.parent[x] = y;
    }
    isConnect(a, b) {
        return this.find(a) === this.find(b);
    }
}