/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1;
    const uf = new UnionFind(n);
    for (const [a, b] of connections) {
        uf.union(a, b);
    }
    return uf.count - 1;
};
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, index) => index);
        this.count = n;
    }
    find(x) {
        if (x === this.parent[x]) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(a, b) {
        let x = this.find(a), y = this.find(b);
        if (x === y) return;
        this.parent[x] = y;
        this.count--;
    }
}