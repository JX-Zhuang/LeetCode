/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
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
        return itemA[1] < itemB[1];
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
var kSmallestPairs = function (nums1, nums2, k) {
    const maxPQ = new PriorityQueue();
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        const n1 = nums1[i];
        for (let j = 0; j < Math.min(nums2.length, k); j++) {
            const n2 = nums2[j];
            const sum = n1 + n2;
            if (maxPQ.size() < k) {
                maxPQ.insert([[n1, n2], sum]);
                continue;
            }
            if (sum < maxPQ.peek()[1]) {
                maxPQ.poll();
                maxPQ.insert([[n1, n2], sum]);
            }
        }
    }
    return maxPQ.pq.slice(1).map(item => item[0]);
};