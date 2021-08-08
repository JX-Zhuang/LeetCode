/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    const uf = new UnionFind(n);
    for (const edge of edges) {
        if (!uf.union(...edge)) return false;
    }
    return uf.getCount() === 1;
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
}