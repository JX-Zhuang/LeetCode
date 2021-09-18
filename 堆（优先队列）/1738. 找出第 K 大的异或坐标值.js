/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class PriorityQueue {
    constructor() {
        this.pq = [null];
        this.n = 0;
    }
    exch(a, b) {
        [this.pq[a], this.pq[b]] = [this.pq[b], this.pq[a]];
    }
    comparator(a, b) {
        const itemA = this.pq[a], itemB = this.pq[b];
        return itemA > itemB;
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    swim(n) {
        while (n > 1 && this.comparator(n >> 1, n)) {
            this.exch(n >> 1, n);
            n >>= 1;
        }
    }
    poll() {
        const result = this.pq[1];
        this.pq[1] = this.pq[this.n--];
        this.sink(1);
        delete this.pq[this.n + 1];
        return result;
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
    peek() {
        return this.pq[1];
    }
    size() {
        return this.n;
    }
}
var kthLargestValue = function (matrix, k) {
    var m = matrix.length, n = matrix[0].length;
    var arr = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
    for (var i = 1; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            arr[i][j] = arr[i - 1][j] ^ arr[i][j - 1] ^ arr[i - 1][j - 1] ^ matrix[i - 1][j - 1];
        }
    }
    var minPQ = new PriorityQueue();
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            const item = arr[i][j];
            if (minPQ.size() < k) {
                minPQ.insert(item);
                continue;
            }
            if (minPQ.peek() < item) {
                minPQ.poll();
                minPQ.insert(item);
            }
        }
    }
    return minPQ.peek();
};