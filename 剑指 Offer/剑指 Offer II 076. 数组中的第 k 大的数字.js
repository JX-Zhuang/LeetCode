/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    var minPQ = new MinPQ(k);
    for (let n of nums) {
        if (minPQ.size() === k) {
            if (n > minPQ.min()) {
                minPQ.delMin();
            } else {
                continue;
            }
        }
        minPQ.insert(n);
    }
    return minPQ.min();
};
class MinPQ {
    constructor(param) {
        this.pq = new Array(param + 1);
        this.n = 0;
    }
    size() {
        return this.n;
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    min() {
        return this.pq[1];
    }
    delMin() {
        const min = this.pq[1];
        this.pq[1] = this.pq[this.n--];
        this.sink(1);
        return min;
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
    swim(key) {
        while (key > 1 && this.less(key, key >> 1)) {
            this.exch(key, key >> 1);
            key >>= 1;
        }
    }
    sink(key) {
        while (key * 2 <= this.n) {
            let j = key * 2;
            if (j < this.n && this.less(j + 1, j)) j++;
            if (!this.less(j, key)) break;
            this.exch(j, key);
            key = j;
        }
    }
    less(i, j) {
        return this.pq[i] < this.pq[j];
    }
    order() {
        const copy = [...this.pq];
        const arr = [], n = this.n;
        while (this.n) {
            arr.push(this.delMin());
        }
        this.pq = copy;
        this.n = n;
        return arr;
    }
}