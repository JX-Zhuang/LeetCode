/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    var l = graph.length;
    var uf = new UnionFind(l);
    for (var i = 0; i < l; i++) {
        var item = graph[i];
        for (var j = 0; j < item.length; j++) {
            if (uf.isConnected(i, item[j])) return false;
            uf.union(item[0], item[j])
        }
    }
    return true;
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.parents = Array.from(new Array(n), (_, index) => index);
    }
    find(a) {
        if (a !== this.parents[a]) {
            this.parents[a] = this.find(this.parents[a]);
        }
        return this.parents[a];
    }
    union(a, b) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return false;
        this.count--;
        this.parents[x] = y;
        return true;
    }
    getCount() {
        return this.count;
    }
    isConnected(a, b) {
        return this.find(a) === this.find(b);
    }
}