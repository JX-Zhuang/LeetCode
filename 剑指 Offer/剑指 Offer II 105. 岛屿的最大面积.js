/**
 * @param {number[][]} grid
 * @return {number}
 * 与 695. 岛屿的最大面积 一样
 */
var maxAreaOfIsland = function (grid) {

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
        const x = this.parents[a], y = this.parents[b];
        if (x === y) return;
        this.parents[x] = y;
    }
    isConnected(a, b) {
        return this.find(a) === this.find(b);
    }
}