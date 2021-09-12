/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class PriorityQueue {
    constructor(n) {
        this.queue = new Array(n + 1);
        this.n = 0;
    }
    exch(a, b) {
        const temp = this.queue[a];
        this.queue[a] = this.queue[b];
        this.queue[b] = temp;
    }
    less(a, b) {
        return this.queue[a] < this.queue[b];
    }
    size() {
        return this.n;
    }
    insert(value) {
        this.queue[++this.n] = value;
        this.swim(this.n);
    }
    swim(n) {
        while (n > 1 && this.less(n >> 1, n)) {
            this.exch(n >> 1, n);
            n = n >> 1;
        }
    }
    sink(n) {
        while (n * 2 < this.n) {
            let i = n * 2;
            if (i < this.n && this.less(i, i + 1)) i++;
            if (this.less(i, n)) break;
            this.exch(i, n);
            n = i;
        }
    }
    deleteMax() {
        this.exch(1, this.n--);
        this.sink(1);
        delete this.queue[this.n + 1];
    }
    peek() {
        return this.queue[1];
    }
}
var kthSmallest = function (matrix, k) {
    var maxPQ = new PriorityQueue(k);
    for (var item of matrix) {
        for (var num of item) {
            if (maxPQ.size() !== k) {
                maxPQ.insert(num);
                continue;
            }
            if (num < maxPQ.peek()) {
                maxPQ.deleteMax();
                maxPQ.insert(num);
            }
        }
    }
    return maxPQ.peek();
};