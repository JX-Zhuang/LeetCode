/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (N, paths) {
    var res = new Array(N).fill(0);
    var graph = [];
    for (var i = 1; i <= N; i++) {
        graph[i] = [];
    }
    for (var path of paths) {
        var g1 = path[0], g2 = path[1];
        graph[g1].push(g2);
        graph[g2].push(g1);
    }
    for (var i = 1; i <= N; i++) {
        var flowers = [1, 2, 3, 4];
        var gardens = graph[i];
        for (var j = 0; j < gardens.length; j++) {
            var g = gardens[j];
            var flowerIndex = flowers.indexOf(res[g - 1]);
            if (flowerIndex != -1) {
                flowers.splice(flowerIndex, 1);
            }
        }
        res[i - 1] = flowers[0];
    }
    return res;
};