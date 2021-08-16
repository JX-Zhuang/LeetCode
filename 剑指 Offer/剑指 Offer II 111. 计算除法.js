/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    var id = 0;
    var m = {};
    var uf = new UnionFind(2 * equations.length);
    for (var i = 0; i < equations.length; i++) {
        var item = equations[i];
        var [a, b] = item;
        if (!m.hasOwnProperty(a)) {
            m[a] = id++;
        }
        if (!m.hasOwnProperty(b)) {
            m[b] = id++;
        }
        var idA = m[a], idB = m[b];
        uf.union(idA, idB, values[i]);
    }
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        var [a, b] = queries[i];
        if (!m.hasOwnProperty(a) || !m.hasOwnProperty(b)) {
            result.push(-1);
            continue;
        }
        var idA = m[a], idB = m[b];
        result.push(uf.weight(idA, idB));
    }
    return result;
};
class UnionFind {
    constructor(n) {
        this.parents = new Array(n).fill(0).map((item, index) => index);
        this.weights = new Array(n).fill(1);
    }
    find(a) {
        if (this.parents[a] === a) return a;
        var origin = this.parents[a];
        this.parents[a] = this.find(this.parents[a]);
        this.weights[a] *= this.weights[origin];
        return this.parents[a];
    }
    union(a, b, weight) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return false;
        this.weights[x] = this.weights[b] * weight / this.weights[a];
        this.parents[x] = y;
        return true;
    }
    isConnected(a, b) {
        return this.find(a) === this.find(b);
    }
    weight(a, b) {
        if (this.find(a) !== this.find(b)) return -1;
        return this.weights[a] / this.weights[b];
    }
}