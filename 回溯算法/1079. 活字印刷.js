/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    var ans = 0;
    tiles = tiles.split('').sort();
    var backtrack = function (used) {
        for (var i = 0; i < tiles.length; i++) {
            if (used[i]) continue;
            if (i > 0 && tiles[i] === tiles[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            ans += 1;
            backtrack(used);
            used[i] = false;
        }
    };
    backtrack({});
    return ans;
};