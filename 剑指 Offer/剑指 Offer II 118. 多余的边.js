/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    edges.forEach(item => {
        item[0]--;
        item[1]--;
    });
    var uf = new UnionFind(edges.length);
    for (var item of edges) {
        if (uf.isConnected(item[0], item[1])) return [item[0] + 1, item[1] + 1];
        uf.union(item[0], item[1]);
    }
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