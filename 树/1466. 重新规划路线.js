/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    var arr = [];
    var visited = new Array(n).fill(false);
    for (var i = 0; i < n; i++) {
        arr[i] = [];
    }
    for (var i = 0; i < connections.length; i++) {
        arr[connections[i][0]].push(i);
        arr[connections[i][1]].push(i);
    }
    var ans = 0;
    var q = [0];
    while (q.length) {
        var node = q.shift();
        for (var index of arr[node]) {
            if (visited[index]) continue;
            visited[index] = true;
            var a = connections[index][0];
            var b = connections[index][1];
            ans += a === node;
            q.push(a === node ? b : a);
        }
    }
    return ans;
};
//arr [ [ 0, 3 ], [ 0, 1 ], [ 2 ], [ 1, 2 ], [ 3, 4 ], [ 4 ] ]
