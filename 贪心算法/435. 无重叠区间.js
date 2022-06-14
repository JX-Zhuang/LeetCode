/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
    var stack = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        var current = intervals[i], prev = stack[stack.length - 1];
        if (prev[1] <= current[0]) {
            stack.push(current);
            continue;
        }
        if (prev[1] > current[1]) {
            stack.pop();
            stack.push(current);
        }
    }
    return intervals.length - stack.length;
};