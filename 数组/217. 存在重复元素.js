/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var o = {};
    for (var n of nums) {
        if (o.hasOwnProperty(n)) return true;
        o[n] = true;
    }
    return false;
};