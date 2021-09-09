/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    var arr = [];
    for (var i = 0; i < buildings.length; i++) {
        var item = buildings[i];
        arr.push(item[0]);
        arr.push(item[1]);
    }
    arr.sort((a, b) => a - b);
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        var max = 0;
        for (var j = 0; j < buildings.length; j++) {
            var item = buildings[j];
            if (item[0] <= x && item[1] > x) {
                max = Math.max(item[2], max);
            }
        }
        var lastIndex = result.length - 1;
        if (lastIndex < 0 || result[lastIndex][1] !== max) {
            result.push([x, max]);
        }
    }
    return result;
};