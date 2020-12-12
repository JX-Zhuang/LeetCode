/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    var valid = true;
    var edges = [];
    var visited = new Array(numCourses).fill(0);
    var ans = [];
    for (var i = 0; i < numCourses; i++) {
        edges.push([]);
    }
    for (var item of prerequisites) {
        edges[item[1]].push(item[0]);
    }
    var j = numCourses - 1;
    var dfs = function (index) {
        var es = edges[index];
        visited[index] = 1;
        for (var i of es) {
            if (visited[i] === 0) {
                dfs(i);
            } else if (visited[i] === 1) {
                valid = false;
                return;
            }
        }
        visited[index] = 2;
        ans[j--] = index;
    };
    for (var i = 0; i < numCourses && valid; i++) {
        if (visited[i] === 0) dfs(i);
    }
    return valid ? ans : [];
};