/**
 * @param {number[]} nums
 * @return {number}
 */
class PQ {
    constructor(size) {
        this.size = size;
        this.q = [];
    }
    push(value) {
        this.q.push(value);
        this.q.sort((a, b) => b - a);
        this.q.length = this.size;
    }
    getMinValue() {
        var value = this.q[this.q.length - 1];
        return value === undefined ? this.q[0] : value;
    }
}
var thirdMax = function (nums) {
    var q = new PQ(3);
    var arr = [...new Set(nums)];
    for (var n of arr) {
        q.push(n);
    }
    return q.getMinValue();
};