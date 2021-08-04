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
    var id = 0;
    for (var i = 0; i < equations.length; i++) {
        var item = equations[i];
        var a = item[0], b = item[1];
        if (!m.has(a)) {
            m.set(a, id++);
        }
        if (!m.has(b)) {
            m.set(b, id++);
        }
        var idA = m.get(a), idB = m.get(b);
        uf.union(idA, idB, values[i]);
    }
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        var item = queries[i];
        var a = item[0], b = item[1];
        var idA = m.get(a), idB = m.get(b);
        if (idA === undefined || idB === undefined) {
            result[i] = -1;
        } else {
            result[i] = uf.isConnected(idA, idB);
        }
    }
    return result;
};
class UnionFind {
    constructor(n) {
        this.parents = Array.from(new Array(n).fill(0), (item, index) => index);
        this.weights = new Array(n).fill(1);
    }
    find(a){
        if(a!==this.parents[a]){
            var origin = this.parents[a];
            this.parents[a] = this.find(this.parents[a]);
            this.weights[a]*=this.weights[origin];
        }
        return this.parents[a];
    }
    union(a, b, value) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return;
        this.parents[x] = y;
        this.weights[x] = this.weights[b] * value / this.weights[a];
    }
    isConnected(a, b) {
        var x = this.find(a), y = this.find(b);
        if (x === y) return this.weights[a] / this.weights[b];
        return -1;
    }
}