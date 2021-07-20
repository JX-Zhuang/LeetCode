/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
    var n = grid.length;
    var uf = new UnionFind(4 * n * n);
    for (var i = 0; i < n; i++) {
        var arr = grid[i].split('');
        for (var j = 0; j < n; j++) {
            var index = 4 * (i * n + j),
                c = arr[j];
            if (c === '/') {
                uf.union(index, index + 3);
                uf.union(index + 1, index + 2);
            } else if (c === '\\') {
                uf.union(index, index + 1);
                uf.union(index + 2, index + 3);
            } else {
                uf.union(index, index + 1);
                uf.union(index + 1, index + 2);
                uf.union(index + 2, index + 3);
            }
            if (j + 1 < n) {
                uf.union(index + 1, 4 * (i * n + j + 1) + 3);
            }
            if (i + 1 < n) {
                uf.union(index + 2, 4 * ((i + 1) * n + j));
            }
        }
    }
    return uf.getCount();
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = Array.from(new Array(n), (item, index) => index);
    }
    find(x) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
    union(a, b) {
        var x = this.find(a),
            y = this.find(b);
        if (x === y) return;
        this.parent[x] = y;
        this.count--;
    }
    getCount() {
        return this.count;
    }
}