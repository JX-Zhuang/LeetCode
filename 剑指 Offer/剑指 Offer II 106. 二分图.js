/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {

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