/**
 * @param {number[][]} events
 * @return {number}
 */
class PriorityQueue {
    constructor() {
        this.queue = new Array(null);
        this.n = 0;
    }
    comparator(a, b) {
        return this.queue[a] > this.queue[b];
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
            this.exch(n, n >> 1);
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
        this.queue[1] = this.queue[this.n--];
        this.sink(1);
        return result;
    }
    peek() {
        return this.queue[1];
    }
}
var maxEvents = function (events) {
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
    var left = {};
    for (var i = 0; i < events.length; i++) {
        var item = events[i];
        if (!left.hasOwnProperty(item[0])) {
            left[item[0]] = [];
        }
        left[item[0]].push(i);
        min = Math.min(min, item[0]);
        max = Math.max(max, item[1]);
    }
    var result = 0;
    var pq = new PriorityQueue();
    for (var i = min; i <= max; i++) {
        var item = left[i];
        if (item) {
            for (var j of item) {
                pq.insert(events[j][1]);
            }
        }
        while (pq.size() && pq.peek() < i) {
            pq.poll();
        }
        if (pq.size()) {
            pq.poll();
            result++;
        }
    }
    return result;
};