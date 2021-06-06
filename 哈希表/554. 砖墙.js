/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    var map = new Map();
    for (var w of wall) {
        var sum = 0;
        for (var i = 0; i < w.length - 1; i++) {
            sum += w[i];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    var max = 0;
    for (var [key, value] of map) {
        max = Math.max(value, max);
    }
    return wall.length - max;
};