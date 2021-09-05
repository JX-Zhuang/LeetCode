/**
 * initialize your data structure here.
 */
class MaxPQ {
    constructor() {
        this.pq = new Array(1);
        this.n = 0;
    }
    max() {
        return this.pq[1];
    }
    delMax() {
        const max = this.pq[1];
        this.exch(1, this.n--);
        delete this.pq[this.n + 1];
        this.sink(1);
        return max;
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
    sink(k) {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j < this.n && this.less(j, j + 1)) j++;
            if (!this.less(k, j)) break;
            this.exch(k, j);
            k = j;
        }
    }
    swim(k) {
        while (k > 1 && this.less(k >> 1, k)) {
            this.exch(k >> 1, k);
            k >>= 1;
        }
    }
    less(a, b) {
        return this.pq[a] < this.pq[b];
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
}
class MinPQ {
    constructor() {
        this.pq = new Array(0);
        this.n = 0;
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
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
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
}
var MedianFinder = function () {
    this.minPQ = new MinPQ();
    this.maxPQ = new MaxPQ();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */