/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
    const uf = new UnionFind(n);
    connections.forEach((item) => {
        item[0]--;
        item[1]--;
    });
    connections.sort((a, b) => a[2] - b[2]);
    let result = 0;
    for (const [start, end, cost] of connections) {
        if (uf.union(start, end) === false) continue;
        result += cost;
        if (uf.getCount() === 1) {
            return result;
        }
    }
    return -1;
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.parents = Array.from(new Array(n).fill(0), (item, index) => index);
    }
    find(n) {
        while (n !== this.parents[n]) {
            this.parents[n] = this.parents[this.parents[n]];
            n = this.parents[n];
        }
        return n;
    }
    union(a, b) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return false;
        this.parents[x] = y;
        this.count--;
        return true;
    }
    getCount() {
        return this.count;
    }
}