/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class PriorityQueue {
    constructor() {
        this.queue = new Array(null);
        this.n = 0;
    }
    comparator(a, b) {
        return this.queue[a][0] > this.queue[b][0];
    };
    exch(a, b) {
        const temp = this.queue[a];
        this.queue[a] = this.queue[b];
        this.queue[b] = temp;
    }
    size() {
        return this.n;
    }
    insert(value) {
        this.queue[++this.n] = value;
        this.swim(this.n);
    }
    swim(n) {
        while (n > 1 && this.comparator(n >> 1, n)) {
            this.exch(n >> 1, n);
            n = n >> 1;
        }
    }
    sink(n) {
        while (n * 2 <= this.n) {
            let i = n * 2;
            if (i < this.n && this.comparator(i, i + 1)) i++;
            if (this.comparator(i, n)) break;
            this.exch(i, n);
            n = i;
        }
    }
    poll() {
        const result = this.queue[1];
        // this.exch(1, this.n--);
        this.queue[1] = this.queue[this.n--];
        this.sink(1);
        return result;
    }
    peek() {
        return this.queue[1];
    }
}
var kthSmallest = function (matrix, k) {
    var pq = new PriorityQueue();
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        pq.insert([matrix[i][0], i, 0]);
    }
    for (var i = 0; i < k - 1; i++) {
        const now = pq.poll();
        if (now[2] !== n - 1) {
            pq.insert([matrix[now[1]][now[2] + 1], now[1], now[2] + 1]);
        }
    }
    return pq.poll()[0];
};