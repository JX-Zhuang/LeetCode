/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const n = heights.length,
        m = heights[0].length;
    const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const dfs = function (i, j, net, k) {
        if (i === n - 1 && j === m - 1) return true;
        net[i][j] = 1;
        for (const [x, y] of direction) {
            const nextI = i + x,
                nextJ = j + y;
            if (nextJ < m && nextJ >= 0 && nextI < n && nextI >= 0 && !net[nextI][nextJ]) {
                if (Math.abs(heights[i][j] - heights[nextI][nextJ]) <= k) {
                    if(dfs(nextI, nextJ, net, k)) return true;
                }
            }
        }
        return false;
    }
    let left = 0, right = 1000000;
    while (left < right) {
        const mid = (right + left) >> 1;
        const net = Array.from({ length: n }, () => Array(m).fill(0));
        const ans = dfs(0, 0, net, mid);
        if (ans) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};