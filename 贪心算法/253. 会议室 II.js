/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    var endList = [intervals[0][1]];
    for (var i = 1; i < intervals.length; i++) {
        var item = intervals[i];
        if (item[0] < endList[0]) {
            endList.push(item[1]);
        } else {
            endList[0] = item[1];
        }
        endList.sort((a, b) => a - b);
    }
    return endList.length;
};
var minMeetingRooms = function (intervals) {
    var map = new Map();
    for (var interval of intervals) {
        var start = interval[0], end = interval[1];
        map.set(start, (map.get(start) || 0) + 1);
        map.set(end, (map.get(end) || 0) - 1);
    }
    var keys = [...map.keys()].sort((a, b) => a - b);
    var res = 0, sum = 0;
    for (var key of keys) {
        var value = map.get(key);
        sum += value;
        res = Math.max(res, sum);
    }
    return res;
};