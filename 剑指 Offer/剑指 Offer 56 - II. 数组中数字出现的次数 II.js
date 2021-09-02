/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var m = {};
    for (const n of nums) {
        if (!m.hasOwnProperty(n)) {
            m[n] = 0;
        }
        m[n]++;
    }
    for (const k in m) {
        if (m[k] === 1) return k
    }
};