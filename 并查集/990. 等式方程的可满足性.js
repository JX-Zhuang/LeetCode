/**
 * @param {string[]} equations
 * @return {boolean}
 */
var index = function (a) {
    return a.charCodeAt() - 97;
}
var equationsPossible = function (equations) {
    var uf = new UnionFind(26);
    for (const item of equations) {
        if (item[1] == '=') {
            uf.union(index(item[0]), index(item[3]));
        }
    }
    for (const item of equations) {
        if (item[1] == '!') {
            if (uf.find(index(item[0])) === uf.find(index(item[3]))) return false;
        }
    }
    return true;
};
class UnionFind {
    constructor(n) {
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
        if (x === y) return;
        this.parents[x] = y;
    }
}