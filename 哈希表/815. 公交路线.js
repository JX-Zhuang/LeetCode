/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) return 0;
    var map = new Map(); // 站->index[]
    for (var i = 0; i < routes.length; i++) {
        var item = routes[i];
        for (var j = 0; j < item.length; j++) {
            if (!map.has(item[j])) {
                map.set(item[j], []);
            }
            map.get(item[j]).push(i);
        }
    }
    var arr = map.get(source);
    var ans = 1;
    var visited = new Set();
    while (arr.length) {
        for (var i = arr.length - 1; i >= 0; i--) {
            var index = arr.shift();
            for (var j = 0; j < routes[index].length; j++) {
                var item = routes[index][j];
                if (item === target) return ans;
                for (var key of map.get(item)) {
                    if (!visited.has(key)) arr.push(key);
                    visited.add(key);
                }
            }
        }
        ans++;
    }
    return -1;
};