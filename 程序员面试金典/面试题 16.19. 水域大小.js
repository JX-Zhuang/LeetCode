/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
    var ans = [];
    var n = land.length, m = land[0].length;
    var count = 0;
    var dfs = function (x, y) {
        if (x < 0 || y < 0 || x >= n || y >= m || land[x][y] !== 0) return;
        land[x][y] = -1;
        count++;
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
        dfs(x + 1, y + 1);
        dfs(x + 1, y - 1);
        dfs(x - 1, y + 1);
        dfs(x - 1, y - 1);
    };
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (land[i][j] === 0) {
                count = 0;
                dfs(i, j);
                ans.push(count);
            }
        }
    }
    ans.sort((a, b) => a - b);
    return ans;
};