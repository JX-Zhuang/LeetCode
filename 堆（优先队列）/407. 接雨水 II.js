/**
 * @param {number[][]} heightMap
 * @return {number}
 */
class PriorityQueue {
    constructor() {
        this.pq = [null];
        this.n = 0;
    }
    comparator(a, b) {
        return this.pq[a][2] > this.pq[b][2];
    }
    size() {
        return this.n;
    }
    swim(n) {
        while (n > 1 && this.comparator(n >> 1, n)) {
            this.exch(n >> 1, n);
            n = n >> 1;
        }
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
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
        const result = this.pq[1];
        this.pq[1] = this.pq[this.n--];
        this.sink(1);
        return result;
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
}
var trapRainWater = function (heightMap) {
    var result = 0;
    if (heightMap.length <= 0) return result;
    var pq = new PriorityQueue();
    var m = heightMap.length, n = heightMap[0].length;
    var visited = Array.from(new Array(m), () => new Array(n).fill(false));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                pq.insert([i, j, heightMap[i][j]]);
                visited[i][j] = true;
            }
        }
    }
    var dirs = [-1, 0, 1, 0, -1];
    var poll, x, y, height;
    while (pq.size()) {
        poll = pq.poll();
        for (var i = 0; i < 4; i++) {
            x = poll[0] + dirs[i];
            y = poll[1] + dirs[i + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
                height = heightMap[x][y];
                if (poll[2] > height) {
                    result += poll[2] - height;
                }
                pq.insert([x, y, Math.max(poll[2], height)]);
                visited[x][y] = true;
            }
        }
    }
    return result;
};