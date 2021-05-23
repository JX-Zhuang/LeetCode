/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * y1 = kx1+b
 * y2 = kx2+b
 * k = (y2-y1)/(x2-x1)
 * b = (y1*x2-y2*x1)/(x2-x1)
 */

var maxPoints = function (points) {
    if (points.length === 0 || points.length === 1) return points.length;
    var xy = {};
    for (var i = 0; i < points.length; i++) {
        var [x1, y1] = points[i];
        for (var j = 0; j < points.length; j++) {
            if (i === j) continue;
            var [x2, y2] = points[j];
            var key;
            if (x2 === x1) {
                key = `${x2}Infinity`;
            } else {
                var k = (y2 - y1) / (x2 - x1);
                var b = (y1 * x2 - y2 * x1) / (x2 - x1);
                key = `${k}${b}`;
            }
            if (!xy.hasOwnProperty(key)) {
                xy[key] = [];
            }
            if (!xy[key].includes(i)) {
                xy[key].push(i);
            }
        }
    }
    var max = 0;
    for (var k in xy) {
        max = Math.max(max, xy[k].length);
    }
    return max;
};