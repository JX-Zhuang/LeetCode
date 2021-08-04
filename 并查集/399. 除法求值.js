/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    var l = equations.length;
    var uf = new UnionFind(2 * l);
    var m = new Map();
    
};
class UnionFind {
    constructor(n) {
        this.parents = Array.from(new Array(n).fill(0), (item, index) => index);
    }
    find(a) {
        while (this.parents[a] !== a) {
            this.parents[a] = this.parents[this.parents[n]];
            a = this.parents[a];
        }
        return a;
    }
    union(a, b) {
        const x = this.parents[a], y = this.parents[b];
        if (x === y) return;
        this.parents[x] = y;
    }
}