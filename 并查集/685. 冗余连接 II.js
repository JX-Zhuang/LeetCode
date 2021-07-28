/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
    const length = edges.length;
    const parents = [];
    const uf = new UnionFind(length + 1);
    for (let i = 1; i <= length; i++) {
        parents[i] = i;
    }
    let conflict = -1, cycle = -1;
    for (let i = 0; i < length; i++) {
        const [node1, node2] = edges[i];
        if (node2 !== parents[node2]) {
            conflict = i;
        } else {
            parents[node2] = node1;
            if (uf.find(node1) === uf.find(node2)) {
                cycle = i;
            } else {
                uf.union(node1, node2);
            }
        }
    }
    if (conflict < 0) {
        return edges[cycle];
    } else {
        const conflictNode = edges[conflict];
        if (cycle >= 0) {
            return [parents[conflictNode[1]], conflictNode[1]];
        } else {
            return conflictNode;
        }
    }
};
class UnionFind {
    constructor(n) {
        this.parents = Array.from(new Array(n), (item, index) => index);
    }
    union(a, b) {
        const x = this.parents[a], y = this.parents[b];
        if (x === y) return;
        this.parents[x] = y;
    }
    find(x) {
        while (this.parents[x] !== x) {
            this.parents[x] = this.parents[this.parents[x]];
            x = this.parents[x];
        }
        return x;
    }
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}