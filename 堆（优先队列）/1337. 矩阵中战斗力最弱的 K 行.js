/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    var arr = mat.map((item, index) => ({
        index,
        count: item.reduce((a, b) => a + b, 0)
    }));
    return arr.sort((a, b) => a.count - b.count).slice(0, k).map(a => a.index);
};