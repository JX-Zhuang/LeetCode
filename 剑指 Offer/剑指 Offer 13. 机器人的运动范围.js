/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var count = function (n) {
    var r = 0;
    while (n != 0) {
        r += n % 10;
        n = Math.floor(n / 10);
    }
    return r;
}
var movingCount = function (m, n, k) {
    var r = 0;
    var visited = Array.from(new Array(m), () => new Array(n).fill(false));
    var dfs = function (x, y) {
        if (x < 0 || y < 0 || x >= m || y >= n || visited[x][y]) return;
        var c = count(x) + count(y);
        visited[x][y] = true;
        if (c > k) return;
        r++;
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    dfs(0, 0);
    return r;
};