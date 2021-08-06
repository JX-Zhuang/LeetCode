/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    const uf = new UnionFind(n);
    for (const edge of edges) {
        uf.union(edge[0], edge[1]);
    }
    return uf.getCount();
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.parents = Array.from(new Array(n).fill(0), (_, index) => index);
    }
    find(a) {
        while (a !== this.parents[a]) {
            this.parents[a] = this.parents[this.parents[a]];
            a = this.parents[a];
        }
        return a;
    }
    union(a, b) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return;
        this.count--;
        this.parents[x] = y;
    }
    getCount(){
        return this.count;
    }
}