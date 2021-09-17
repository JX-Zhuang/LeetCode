/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    var n = stations.length;
    var dp = new Array(n + 1).fill(0);
    dp[0] = startFuel;
    for (var i = 0; i < n; i++) {
        for (var j = i; j >= 0; j--) {
            if (dp[j] >= stations[i][0]) {
                dp[j + 1] = Math.max(dp[j + 1], stations[i][1] + dp[j]);
            }
        }
    }
    for (var i = 0; i <= n; i++) {
        if (dp[i] >= target) return i;
    }
    return -1;
};
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
var minRefuelStops = function (target, startFuel, stations) {
    stations.push([target, 0]);
    const maxPQ = new PriorityQueue();
    let result = 0, prev = 0, tank = startFuel;
    for (const item of stations) {
        const [location, fuel] = item;
        tank = tank - location + prev;
        while (maxPQ.size() && tank < 0) {
            tank += maxPQ.poll();
            result++;
        }
        if (tank < 0) return -1;
        maxPQ.insert(fuel);
        prev = location;
    }
    return result;
}