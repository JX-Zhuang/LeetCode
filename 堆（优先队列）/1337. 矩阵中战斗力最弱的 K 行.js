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
        if (itemA.count === itemB.count) return itemA.index > itemB.index;
        return itemA.count > itemB.count;
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
var kWeakestRows = function (mat, k) {
    var arr = mat.map((item, index) => ({
        index,
        count: item.reduce((a, b) => a + b, 0)
    }));
    var minPQ = new PriorityQueue();
    for (var item of arr) {
        minPQ.insert(item);
    }
    const result = [];
    while (k--) {
        result.push(minPQ.poll().index);
    }
    return result;
};