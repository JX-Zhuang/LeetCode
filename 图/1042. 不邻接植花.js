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
    console.log(graph)
    for (var i = 1; i <= N; i++) {
        var flowers = [0, 1, 2, 3, 4];
        var gardens = graph[i];
        for (var j = 0; j < gardens.length; j++) {
            var g = gardens[j];
            if (res[g - 1]) {
                flowers.splice(res[g - 1], 1);
            }
        }
        res[i - 1] = flowers[1];
        console.log(res)
    }
    return res;
};