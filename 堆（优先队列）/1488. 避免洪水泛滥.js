/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    var result = new Array(rains.length).fill(1);
    var zero = new Set();
    var water = {};
    for (var i = 0; i < rains.length; i++) {
        var item = rains[i];
        if (item === 0) {
            zero.add(i);
            continue;
        }
        if (water.hasOwnProperty(item)) {
            var find = false;
            for (var j of zero) {
                if (j > water[item]) {
                    find = true;
                    break;
                }
            }
            if (!find) return [];
            result[j] = item;
            zero.delete(j);
        }
        result[i] = -1;
        water[item] = i;
    }
    return result;
};