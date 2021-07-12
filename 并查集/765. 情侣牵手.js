/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
    var l = row.length, n = Math.floor(l / 2);
    var uf = new UnionFind(n);
    for (var i = 0; i < l; i += 2) {
        uf.union(Math.floor(row[i] / 2), Math.floor(row[i + 1] / 2));
    }
    return n - uf.getCount();
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n).fill(0).map((_, index) => index);
    }
    find(n) {
        if (this.parent[n] !== n) {
            this.parent[n] = this.find(this.parent[n]);
        }
        return this.parent[n];
    }
    union(n1, n2) {
        const r1 = this.find(n1), r2 = this.find(n2);
        if (r1 == r2) return;
        this.parent[r1] = r2;
        this.count--;
    }
    getCount() {
        return this.count;
    }
}