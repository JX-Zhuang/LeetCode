/**
 * @param {string} s
 * @return {string}
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
        const itemA = this.pq[a].count, itemB = this.pq[b].count;
        return itemA < itemB;
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
var reorganizeString = function (s) {
    if (s.length < 2) return s;
    const counts = {};
    for (const item of s) {
        if (!counts.hasOwnProperty(item)) {
            counts[item] = 0;
        }
        counts[item]++;
    }
    const maxCounts = Math.max(...Object.values(counts));
    if (maxCounts > Math.floor((s.length + 1) / 2)) return '';
    const maxPQ = new PriorityQueue();
    Object.keys(counts).forEach((x) => maxPQ.insert({
        x,
        count: counts[x]
    }));
    let result = '';
    while (maxPQ.size() > 1) {
        const item1 = maxPQ.poll();
        const item2 = maxPQ.poll();
        result += item1.x;
        result += item2.x;
        item1.count--;
        item2.count--;
        if (item1.count) maxPQ.insert(item1);
        if (item2.count) maxPQ.insert(item2);
    }
    if (maxPQ.size()) {
        result += maxPQ.poll().x;
    }
    return result;
};