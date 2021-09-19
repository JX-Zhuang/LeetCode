/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function (arr, k, x) {
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
            const resultA = Math.abs(itemA - x), resultB = Math.abs(itemB - x);
            if (resultA === resultB) return itemA >= itemB;
            return resultA > resultB;
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
    const pq = new PriorityQueue();
    for (const item of arr) {
        pq.insert(item);
    }
    const result = [];
    while (k--) {
        result.push(pq.poll());
    }
    return result.sort((a, b) => a - b);
};