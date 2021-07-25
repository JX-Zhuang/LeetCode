/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
    var ufa = new UnionFind(n), ufb = new UnionFind(n), ans = 0;
    for (const e of edges) {
        e[1]--;
        e[2]--;
    }
    for (const [t, u, v] of edges) {
        if (t === 3) {
            if (!ufa.union(u, v)) {
                ans++;
            } else {
                ufb.union(u, v);
            }
        }
    }
    for (const [t, u, v] of edges) {
        if (t === 1) {
            if (!ufa.union(u, v)) {
                ans++;
            }
        } else if (t === 2) {
            if (!ufb.union(u, v)) {
                ans++;
            }
        }
    }
    if (ufa.count !== 1 || ufb.count !== 1) return -1;
    return ans;
};
class UnionFind {
    constructor(n) {
        this.parent = Array.from(new Array(n), (item, index) => index);
        this.count = n;
    }
    find(x) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
    union(x, y) {
        var a = this.find(x), b = this.find(y);
        if (a === b) return false;
        this.parent[a] = b;
        this.count--;
        return true;
    }
}