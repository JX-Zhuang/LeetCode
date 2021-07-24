/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {

};
class UnionFind {
    constructor(n) {
        this.parent = Array.from(new Array(n), (item, index) => index);
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
        if (a === b) return;
        this.parent[a] = b;
    }
}