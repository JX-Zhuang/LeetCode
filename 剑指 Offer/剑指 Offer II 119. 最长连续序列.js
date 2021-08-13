/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    var uf = new UnionFind(nums);
    for (var i of nums) {
        uf.union(i, i + 1);
    }
    var result = 1;
    for (var i of nums) {
        result = Math.max(result, uf.find(i) - i + 1);
    }
    return result;
};
class UnionFind {
    constructor(arr) {
        this.parents = {};
        for (var item of arr) {
            this.parents[item] = item;
        }
    }
    find(a) {
        if (!this.parents.hasOwnProperty(a)) return null;
        if (a !== this.parents[a]) {
            this.parents[a] = this.find(this.parents[a]);
        }
        return this.parents[a];
    }
    union(a, b) {
        const x = this.find(a), y = this.find(b);
        if (x === null || y == null) return false;
        if (x === y) return false;
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