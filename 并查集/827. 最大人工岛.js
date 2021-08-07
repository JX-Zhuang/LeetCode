/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    var l1 = grid.length, l2 = grid[0].length;
    var m = new Map();
    var dfs = function (i, j, key) {
        //越界 || 水域
        if (i < 0 || j < 0 || i >= l1 || j >= l2 || grid[i][j] === 0) return 0;
        if (grid[i][j] === key) return 0;
        grid[i][j] = key;
        return 1 + dfs(i + 1, j, key) + dfs(i - 1, j, key) + dfs(i, j + 1, key) + dfs(i, j - 1, key);
    }
    var key = 2;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            if (grid[i][j] === 1) {
                m.set(key, dfs(i, j, key));
                key++;
            }
        }
    }
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let res = m.get(2) ? m.get(2) : 0;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            if (grid[i][j] === 0) {
                let keys = moves.map(([mX, mY]) => {
                    return grid[i + mX] ? grid[i + mX][j + mY] : 0;
                }).filter(i => i >= 2);
                keys = [...new Set(keys)].map(key => m.get(key));
                res = Math.max(res, keys.reduce((a, b) => a + b, 1));
            }
        }
    }
    return res;
};