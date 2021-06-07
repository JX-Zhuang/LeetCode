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