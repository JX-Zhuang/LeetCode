/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function (arr, k, x) {
    return arr.map((item) => ({
        item,
        x: Math.abs(item - x)
    })).sort((a, b) => {
        if (a.x === b.x) return a.item - b.item;
        return a.x - b.x;
    }).map(item => item.item).slice(0, k).sort((a, b) => a - b);
};