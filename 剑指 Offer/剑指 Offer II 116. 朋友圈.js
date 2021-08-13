/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    var uf = new UnionFind(isConnected.length);
    for (var i = 0; i < isConnected.length; i++) {
        for (var j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j]) {
                uf.union(i, j);
            }
        }
    }
    return uf.getCount();
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
    isConnected(a, b) {
        return this.find(a) === this.find(b);
    }
}