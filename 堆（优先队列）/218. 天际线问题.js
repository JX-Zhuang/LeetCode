/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
class PriorityQueue {
    constructor() {
        this.pq = [null];
        this.n = 0;
    }
    less(a, b) {
        return this.pq[a][1] < this.pq[b][1];
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
    swim(n) {
        while (n > 1 && this.less(n >> 1, n)) {
            this.exch(n >> 1, n);
            n = n >> 1;
        }
    }
    sink(n) {
        while (2 * n <= this.n) {
            let i = 2 * n;
            if (i < this.n && this.less(i, i + 1)) i++;
            if (this.less(i, n)) break;
            this.exch(i, n);
            n = i;
        }
    }
    delMax() {
        this.exch(1, this.n--);
        this.sink(1);
        delete this.pq[1 + this.n];
    }
    isEmpty() {
        return this.n === 0;
    }
    peek() {
        return this.pq[1];
    }
}
var getSkyline = function (buildings) {
    var arr = [];
    for (var i = 0; i < buildings.length; i++) {
        var item = buildings[i];
        arr.push(item[0]);
        arr.push(item[1]);
    }
    arr.sort((a, b) => a - b);
    var result = [];
    var pq = new PriorityQueue();
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        var max = 0;
        while (index < buildings.length && buildings[index][0] <= x) {
            pq.insert([buildings[index][1], buildings[index][2]]);
            index++;
        }
        while (!pq.isEmpty() && pq.peek()[0] <= x) {
            pq.delMax();
        }
        var max = pq.isEmpty() ? 0 : pq.peek()[1];
        var lastIndex = result.length - 1;
        if (lastIndex < 0 || result[lastIndex][1] !== max) {
            result.push([x, max]);
        }
    }
    return result;
};