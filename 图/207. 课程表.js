/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    var o = {};
    for (var item of prerequisites) {
        var p1 = item[0], p2 = item[1];
        if (!o.hasOwnProperty(p1)) {
            o[p1] = [];
        }
        o[p1].push(p2);
    }
    var visitedMap = {};
    var helper = function (course, visited) {
        if (!course) return true;
        for (var c of course) {
            if (visitedMap[c]) continue;
            if (visited.includes(c)) {
                return false;
            }
            visited.push(c);
            if (!helper(o[c], visited)) return false;
            visited.pop();
        }
        return true;
    }
    for (var key in o) {
        if (!helper(o[key], [Number(key)])) return false;
        visitedMap[key] = true;
    }
    return true;
};