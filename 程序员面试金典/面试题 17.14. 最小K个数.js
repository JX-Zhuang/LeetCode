/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class PriorityQueue {
    constructor(n) {
        this.pq = new Array(n + 1);
        this.n = 0;
    }
    comparator(a, b) {
        return this.pq[a] < this.pq[b];
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
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
        while (2 * n <= this.n) {
            let i = 2 * n;
            if (i < this.n && this.comparator(i, i + 1)) i++;
            if (this.comparator(i, n)) break;
            this.exch(i, n);
            n = i;
        }
    }
    size() {
        return this.n;
    }
    peek() {
        return this.pq[1];
    }
}
var smallestK = function (arr, k) {
    const maxPQ = new PriorityQueue(k);
    for (const item of arr) {
        if (maxPQ.size() < k) {
            maxPQ.insert(item);
            continue;
        }
        if (item < maxPQ.peek()) {
            maxPQ.poll();
            maxPQ.insert(item);
        }
    }
    return maxPQ.pq.slice(1);
};