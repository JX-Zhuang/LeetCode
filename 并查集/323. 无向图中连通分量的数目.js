/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {

};
class UnionFind {
    constructor(n) {
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
        this.parents[x] = y; z
    }
}