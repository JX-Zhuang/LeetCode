/**
 * @param {number[][]} graph
 * @return {number[]}
 */

var eventualSafeNodes = function (graph) {
    var res = [];
    var l = graph.length;
    var color = new Array(l).fill(0);
    var helper = function (i) {
        if (color[i]) return color[i] === 1;
        color[i] = 2;
        for (var j of graph[i]) {
            if (color[j] === 2 || !helper(j)) return false;
        }
        color[i] = 1;
        return true;
    }
    for (var i = 0; i < graph.length; i++) {
        if (helper(i)) {
            res.push(i);
        }
    }
    return res;
};